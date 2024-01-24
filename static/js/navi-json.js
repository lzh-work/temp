let navidataJson = [
  // 技术中心产品
  {
    title: '技术中心产品',
    icon: 'fa-pause',
    naviData: [
      {
        icon: 'favicon.ico',
        name: 'Skybooking Net',
        txt: '',
        url: '',
        btns: [
          {
            name: '',
            env: 'TEST',
            url: 'http://test.skybooking.net',
          },
          {
            name: '',
            env: 'PROD',
            url: 'https://skybooking.net',
          },
        ]
      },
      {
        icon: 'favicon.ico',
        name: 'Skybooking H5',
        txt: '',
        url: '',
        btns: [
          {
            name: '',
            env: 'TEST',
            url: 'http://test-h5.skybooking.net/',
          },
          {
            name: '',
            env: 'PROD',
            url: 'http://skybooking.metathought.cc/',
          }
        ]
      },
      {
        icon: 'favicon.ico',
        name: 'Skybooking Backoffice',
        txt: '',
        url: '',
        btns: [
          {
            name: '',
            env: 'TEST',
            url: 'http://test.skybookingadmin.net',
          },
          {
            name: '',
            env: 'PROD',
            url: 'http://skybookingadmin.net',
          },
        ]
      },
      {
        icon: 'favicon.ico',
        name: 'Skybooking backoffice new',
        txt: '',
        url: '',
        btns: [
          {
            name: '',
            env: 'TEST',
            url: 'http://54.254.244.133:6007/',
          },
        ]
      },
      
    ]
  },
  // 产研协作工具
  {
    title: '产研协作工具',
    icon: 'fa-folder-open',
    naviData: [
      {
        icon: 'item-figma.jpg',
        name: 'Figma',
        txt: 'Manager-Ramviswa',
        url: '',
        btns: [
          {
            name: '',
            env: 'FLIGHT',
            url: 'https://www.figma.com/file/vquvLIDD9WH7kQrrHXxkJm/Flight-Booking?type=design&mode=design&t=ByNMhEW6W1jU6pGL-0',
          },
          {
            name: '',
            env: 'HOTEL',
            url: 'https://www.figma.com/file/BWRaXDQkicI8vKMdJxF7HN/Hotel-Booking?type=design&mode=design&t=ByNMhEW6W1jU6pGL-0',
          },
        ]
      },
      {
        icon: 'item-jira.jpg',
        name: 'JIRA',
        txt: 'Manager-Ramviswa',
        url: 'https://u-pay.atlassian.net/jira/software/projects/OTA/boards/43',
        btns: [
          {
            name: '',
            env: 'dev',
            url: '',
          },
          {
            name: '',
            env: 'uat',
            url: '',
          },
          {
            name: '',
            env: 'prod',
            url: '',
          }
        ]
      }
    ]
  },
  // 研发常用工具
  {
    title: '研发常用工具',
    icon: 'fa-cc',
    naviData: [
      {
        icon: 'item-git.jpg',
        name: 'Gitlab',
        txt: 'Manager-Json',
        url: 'https://git.metathought.cc',
        btns: [
          {
            name: '',
            env: 'dev',
            url: '',
          },
          {
            name: '',
            env: 'uat',
            url: '',
          },
          {
            name: '',
            env: 'prod',
            url: '',
          }
        ]
      },
      {
        icon: 'item-maven.jpg',
        name: 'Maven Repository',
        txt: 'Manager-Tom',
        url: 'http://18.140.217.17:8081/',
        btns: [
          {
            name: '',
            env: 'dev',
            url: '',
          },
          {
            name: '',
            env: 'uat',
            url: '',
          },
          {
            name: '',
            env: 'prod',
            url: '',
          }
        ]
      },
      {
        icon: 'item-sky.jpeg',
        name: 'SkyWalking',
        txt: 'Manager-Romeo',
        btns: [
          {
            name: '',
            env: 'TEST',
            url: 'https://test-swalking.metathought.co',
          },
          {
            name: '',
            env: 'PROD',
            url: 'https://swalking.metathought.co',
          }
        ]
      }
    ]
  },
  // 架构运维工具
  {
    title: '架构运维工具',
    icon: 'fa-android',
    naviData: [
      {
        icon: 'item-pz.jpg',
        name: 'Nacos',
        txt: 'Manager-Romeo',
        url: '',
        btns: [
          {
            name: '',
            env: 'TEST',
            url: 'http://54.254.244.133:8848/nacos',
          },
          {
            name: '',
            env: 'PROD',
            url: 'http://34.236.67.97:8848/nacos',
          }
        ]
      },
      {
        icon: 'item-hazelcast.png',
        name: 'Hazelcast Management',
        txt: 'Manager-',
        url: '',
        btns: [
          {
            name: '',
            env: 'TEST',
            url: 'http://54.254.244.133:5880/',
          }
        ]
      },
      {
        icon: 'item-portainer.jpg',
        name: 'Portainer',
        txt: 'Manager-Romeo',
        url: '',
        btns: [
          {
            name: '',
            env: 'TEST',
            url: 'https://test-sportainer.metathought.co',
          },
          {
            name: '',
            env: 'PROD',
            url: 'https://sportainer.metathought.co',
          }
        ]
      },
      {
        icon: 'item-redis.jpeg',
        name: 'Redis',
        txt: 'Manager-Romeo',
        url: '',
        btns: [
          {
            name: '',
            env: 'TEST',
            url: 'http://54.254.244.133:8001/',
          },
          {
            name: '',
            env: 'PROD',
            url: '',
          }
        ]
      },
      {
        icon: 'item-kibana.jpg',
        name: 'Kibana',
        txt: 'Manager-',
        url: '',
        btns: [
          {
            name: '',
            env: 'TEST',
            url: 'http://18.143.171.83:5601/',
          },
          {
            name: '',
            env: 'PROD',
            url: 'http://54.173.216.161:5601/',
          }
        ]
      },
      {
        icon: 'item-kafka.png',
        name: 'Kafka Control Center',
        txt: 'Manager-',
        url: '',
        btns: [
          {
            name: '',
            env: 'TEST',
            url: 'http://54.254.244.133:9021/s',
          },
          {
            name: '',
            env: 'PROD',
            url: '',
          }
        ]
      },
    ]
  }
]