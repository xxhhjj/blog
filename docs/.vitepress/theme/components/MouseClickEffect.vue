&lt;template&gt;
  &lt;canvas ref="canvas" class="click-effect-canvas"&gt;&lt;/canvas&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref, onMounted, onUnmounted } from 'vue'

const canvas = ref&lt;HTMLCanvasElement | null&gt;(null)
let ctx: CanvasRenderingContext2D | null = null
let particles: Particle[] = []
let animationFrameId: number

interface Particle {
  x: number
  y: number
  radius: number
  color: string
  velocity: { x: number; y: number }
  alpha: number
}

function createParticles(x: number, y: number) {
  const colors = ['#ff7979', '#f6e58d', '#badc58', '#7ed6df', '#e056fd']
  for (let i = 0; i < 8; i++) {
    const velocity = {
      x: (Math.random() - 0.5) * 8,
      y: (Math.random() - 0.5) * 8
    }
    particles.push({
      x,
      y,
      radius: Math.random() * 3 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      velocity,
      alpha: 1
    })
  }
}

function animate() {
  if (!canvas.value || !ctx) return
  
  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)
  
  particles.forEach((particle, index) => {
    if (particle.alpha <= 0) {
      particles.splice(index, 1)
      return
    }
    
    particle.x += particle.velocity.x
    particle.y += particle.velocity.y
    particle.alpha -= 0.02
    
    ctx!.save()
    ctx!.globalAlpha = particle.alpha
    ctx!.beginPath()
    ctx!.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
    ctx!.fillStyle = particle.color
    ctx!.fill()
    ctx!.restore()
  })
  
  animationFrameId = requestAnimationFrame(animate)
}

function handleClick(event: MouseEvent) {
  const rect = canvas.value!.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top
  createParticles(x, y)
  if (!animationFrameId) {
    animate()
  }
}

function resizeCanvas() {
  if (!canvas.value) return
  canvas.value.width = window.innerWidth
  canvas.value.height = window.innerHeight
}

onMounted(() => {
  if (!canvas.value) return
  ctx = canvas.value.getContext('2d')
  resizeCanvas()
  window.addEventListener('click', handleClick)
  window.addEventListener('resize', resizeCanvas)
})

onUnmounted(() => {
  window.removeEventListener('click', handleClick)
  window.removeEventListener('resize', resizeCanvas)
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
  }
})
&lt;/script&gt;

&lt;style scoped&gt;
.click-effect-canvas {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 9999;
}
&lt;/style&gt;
