Vue.config.devtools = true;

const root = new Vue ({
    el:'#root',
    data:{
        activeIndex:0,
        user:{
            name: 'Gabriele Chiarello',
            avatar: '_4'
        },
        contacts: [
            {
              name: 'Alessia',
              avatar: '_io',
              visible: true,
              messages: [{
                date: '10/01/2020 15:30:55',
                text: 'Hai portato a spasso il cane?',
                status: 'sent'
              },
              {
                date: '10/01/2020 15:50:00',
                text: 'Ricordati di dargli da mangiare',
                status: 'sent'
              },
              {
                date: '10/01/2020 16:15:22',
                text: 'Tutto fatto!',
                status: 'received'
              }
              ],
            },
            {
              name: 'Stefano',
              avatar: '_2',
            },
            {
              name: 'Giovanni',
              avatar: '_3',
            },
            {
              name: 'Flavio',
              avatar: '_4',
            },
            {
                name: 'Cristiano',
                avatar: '_5',
            }
          ]
    }
});

