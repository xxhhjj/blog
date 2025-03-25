import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config

export default defineConfig({ 

  base: '/blog/',
  
  title: "慧眼投",
  description: "慧眼识珠，投资全球，港美股券商介绍与对比，港美股开户优惠政策解读，提供最新的开户优惠信息，致力于打造港股美股投资百科全书",
 
  themeConfig: {  
    // https://vitepress.dev/reference/default-theme-config	

    lastUpdated: true,


	logo: '/logo.svg',
	siteTitle: '慧眼投',
    search: {
      provider: 'local'
    },	
			
    nav: [
       {
        text: '首页',
        link: 'index'
      },
	
       {
        text: '港美股券商',
        link: '/broker/index'
      },
      {
        text: '境外银行卡',
        link: '/bank/index'
      },    
      {
        text: '加密货币',
        link: '/crypto/index'
      },  	  

      {
        text: '合作',
        link: '/service/index'
      }
	  
    ],	

    sidebar: [
	
      {
        text: '港美股券商',
		collapsed: false,
        items: [
          { text: '开户羊毛汇总', link: '/broker/index' },
		  { text: '老虎证券', link: '/broker/tiger' },
          { text: '长桥证券', link: '/broker/changqiao' },	
		  { text: '华盛证券', link: '/broker/hst' },
		  { text: '盈立证券', link: '/broker/usmart' },			  
		  { text: '尊嘉金融', link: '/broker/zunjia' },
		  { text: '立桥证券', link: '/broker/liqiao' },
        ]
      },
   

    ],

    socialLinks: [
	
	  {icon:'x',link: 'https://x.com/home'},
      {icon: 'telegram', link: 'https://telegram.com/' },
	  {icon:'youtube',link: 'https://www.youtube.com/'}
	  
    ],
	
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-present gqk'
    }
	
  } 
  
})



