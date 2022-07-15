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
              visible: true,
              messages: [{
                date: '10/01/2020 15:30:55',
                text: 'Hola! come va? Birretta stasera?',
                status: 'sent'
              },
              {
                date: '10/01/2020 15:50:00',
                text: '18.30 al pub?',
                status: 'sent'
              },
              {
                date: '10/01/2020 16:15:22',
                text: 'Stasera devo finire il progetto! Sarà per la prossima volta..',
                status: 'received'
              }
              ],
            },
            {
              name: 'Giovanni',
              avatar: '_3',
              visible: true,
              messages: [{
                date: '10/01/2020 15:30:55',
                text: 'We zio! sabato prossimo serata?',
                status: 'sent'
              },
              {
                date: '10/01/2020 15:50:00',
                text: 'Ho visto che fanno un evento pazzesco a Milano',
                status: 'sent'
              },
              {
                date: '10/01/2020 16:15:22',
                text: 'Ci può stare! Perchè no!',
                status: 'received'
              }
              ],
            },
            {
              name: 'Flavio',
              avatar: '_4',
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
                name: 'Cristiano',
                avatar: '_5',
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
            }
          ]
    },
    methods: {

        setCurrentContact(index) {
            this.currentIndex = index;
        }
    }
});

