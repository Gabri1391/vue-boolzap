Vue.config.devtools = true;

dayjs.extend(dayjs_plugin_customParseFormat);

const date = dayjs('2022-07-18 11:34:10').format('DD/MM/YYYY HH:mm:ss');

const root = new Vue ({
    el:'#root',
    data:{
        newText: '',
        search: '',
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
                status: 'received'
              },
              {
                date: '10/01/2020 15:50:00',
                text: 'Ricordati di dargli da mangiare',
                status: 'received'
              },
              {
                date: '10/01/2020 16:15:22',
                text: 'Fatto tutte e due! Sei stupita eh?',
                status: 'sent'
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
                status: 'received'
              },
              {
                date: '10/01/2020 15:50:00',
                text: '18.30 al pub?',
                status: 'received'
              },
              {
                date: '10/01/2020 16:15:22',
                text: 'Stasera devo finire il progetto! Sarà per la prossima volta..',
                status: 'sent'
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
                text: 'Quando è Milan-Torino? Prendiamo i biglietti?',
                status: 'received'
              },
              {
                date: '10/01/2020 15:50:00',
                text: 'Settimana prossima escono! Per forza! Forza Milan però..eheheh',
                status: 'sent'
              },
              {
                date: '10/01/2020 16:15:22',
                text: 'Forza Toro!',
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
                text: "Quando facciamo l'asta del Fantacalcio?",
                status: 'sent'
              },
              {
                date: '10/01/2020 15:50:00',
                text: 'Il 3 agosto,tu ci sei vero?',
                status: 'received'
              },
              {
                date: '10/01/2020 16:15:22',
                text: 'Per forza hermano! Devo difendere il mio primo posto :D',
                status: 'sent'
              }
              ],
            },
          ]
    },
    computed: {
      filteredContacts() {
        return this.contacts.filter(contact => {
          return contact.name.toLowerCase().includes(this.search.toLowerCase())
        })
      }
    },
    methods: {

        setCurrentContact(index) {
            this.activeIndex = index;
        },

        addMessage(){
          if(!this.newText)return;
            const myMessage = {
                date: "17/07/2022 16:28:40",
                text: this.newText,
                status: "sent",
            };

            const contactMessage = {
                date: "17/07/2022 16:30:50",
                text: 'OK!',
                status: "received",
            };

            this.contacts[this.activeIndex].messages.push(myMessage);
            this.newText = '';
            

            setTimeout(() => {
                this.contacts[this.activeIndex].messages.push(contactMessage)
            }, 2000);
        },

        getNotificationActive(){
          return alert('hai attivato le notifiche dei messaggi!');
        }

    }
});

