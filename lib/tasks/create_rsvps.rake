desc "Create the Rsvps and Rsvp Groups"
task create_rsvps: :environment do

  rsvps = [
      {
          name: 'Chinveeraphan Wu',
          group: [
              {first: 'Eugene', last: 'Chinveeraphan', email: 'chinveeraphan@gmail.com'},
              {first: 'Tiffany', last: 'Wu', email: 'p1nkstardus7@gmail.com'}
          ]
      },
      {
          name: 'Annie - Wu Family',
          group: [
              {first: 'Annie', last: 'Sung', email: ''},
              {first: 'Tim', last: 'Chen', email: nil},
              {first: 'Bella', last: 'Chen', email: nil},
          ]
      },
      {
          name: 'Michelle - Wu Family',
          group: [
              {first: 'Michelle', last: 'Wu', email: ''},
              {first: 'Martin', last: 'Pham', email: nil},
              {first: 'Joshua', last: 'Pham', email: nil},
          ]
      },
      {
          name: 'Parents - Wu Family',
          group: [
              {first: 'Hofu', last: 'Wu', email: ''},
              {first: 'Meina', last: 'Wu', email: ''}
          ]
      },
      {
          name: 'Chinveeraphan Family',
          group: [
              {first: 'Gina', last: 'Tantiudomrak', email: ''},
              {first: 'Leo', last: 'Tantiudomrak', email: ''},
              {first: 'Oggie', last: 'Chinveeraphan', email: ''}
          ]
      },
      {
          name: 'Chinveeraphan Family - Emo',
          group: [
              {first: 'Susie', last: 'Schwabenbauer', email: ''},
          ]
      },
      {
          name: 'Chinveeraphan Family - TJ',
          group: [
              {first: 'TJ', last: 'Schwabenbauer', email: 'mistertj33@gmail.com'},
              {first: 'Haley', last: 'Schwabenbauer', email: ''},
              {first: 'Jacob', last: 'Schwabenbauer', email: ''},
          ]
      },
      {
          name: 'Chinveeraphan Family - Renee',
          group: [
              {first: 'Renee', last: 'Schwabenbauer', email: ''},
              {first: 'Julian', last: '', email: ''},
          ]
      },
      {
          name: 'Chinveeraphan Family - Dawn',
          group: [
              {first: 'Dawn', last: 'Schwabenbauer', email: ''},
              {first: 'Alex', last: '', email: ''},
          ]
      },
      {
          name: 'Jeff & Anne',
          group: [
              {first: 'Jeff', last: 'Hsieh', email: 'jhsieh10@gmail.com'},
              {first: 'Anne', last: 'Wu', email: 'has.annesia@gmail.com'},
          ]
      },
      {
          name: 'George & Fanny',
          group: [
              {first: 'George', last: 'Chin', email: 'georgecchin@gmail.com'},
              {first: 'Fanny', last: 'Halim', email: 'fanny.halim@gmail.com'},
          ]
      },
      {
          name: 'Sarah & Alex',
          group: [
              {first: 'Sarah', last: 'Sheu', email: 'sarahlsheu@gmail.com '},
              {first: 'Alex', last: 'Sheu', email: 'alexanderysheu@gmail.com '},
          ]
      },
      {
          name: 'Hannah & Yuekai',
          group: [
              {first: 'Hannah', last: 'Lou', email: 'hhlou88@gmail.com'},
              {first: 'Yuekai', last: 'Sun', email: 'yuekai@gmail.com'},
          ]
      },
      {
          name: 'Kathy & Ben',
          group: [
              {first: 'Kathy', last: 'Nguyen', email: 'knguyen7@gmail.com'},
              {first: 'Ben', last: 'Beiny', email: 'benbeiny@gmail.com'},
          ]
      },
      {
          name: 'Lucy & Wilmot',
          group: [
              {first: 'Lucy', last: 'Liu', email: 'luzliu@gmail.com'},
              {first: 'Wilmot', last: 'Yeh', email: 'byoink@gmail.com'},
              {first: 'Linden', last: 'Yeh', email: ''},
          ]
      },      {
          name: 'Jessica & Will',
          group: [
              {first: 'Jessica', last: 'Cho', email: 'jessicacho@gmail.com'},
              {first: 'William', last: 'Ma', email: ''},
          ]
      },
      {
          name: 'Brian & Rose',
          group: [
              {first: 'Brian', last: 'Lan', email: 'beoblues6@gmail.com'},
              {first: 'Rose', last: 'Hoang', email: ''},
          ]
      },
      {
          name: 'Hope & Mike',
          group: [
              {first: 'Hope', last: 'Nam Phung', email: 'nam.hope@gmail.com'},
              {first: 'Mike', last: 'Phung', email: ''},
              {first: 'Claire', last: 'Phung', email: ''},
          ]
      },      {
          name: 'Melissa & David',
          group: [
              {first: 'Melissa', last: 'Quan', email: 'mel.quan@yahoo.com'},
              {first: 'David', last: 'Rubin', email: ''},
          ]
      },
      {
          name: 'Jennifer & Eric',
          group: [
              {first: 'Jennifer', last: 'Hu', email: 'Jennifer.hu9@gmail.com'},
              {first: 'Eric', last: 'Lin', email: 'ericplin68@gmail.com'},
              {first: 'Alexa', last: 'Lin', email: ''},
              {first: 'Oliver', last: 'Lin', email: ''},
          ]
      },
      {
          name: 'Hiromi & Jeff',
          group: [
              {first: 'Hiromi', last: 'Nakano', email: 'hi.nakano@gmail.com'},
              {first: 'Jeff', last: 'Berger', email: ''},
              {first: 'Jake', last: 'Berger', email: ''},
              {first: 'Julia', last: 'Berger', email: ''},
          ]
      },
      {
          name: 'David & Jessica',
          group: [
              {first: 'David', last: 'Zeng', email: 'david.tao.zeng@gmail.com'},
              {first: 'Jessica', last: 'Choy', email: 'jessica.choy@gmail.com'},
          ]
      },      {
          name: 'Lily & Tao',
          group: [
              {first: 'Lily', last: 'Liu', email: 'lilyyangliu@gmail.com'},
              {first: 'Tao', last: 'Luo', email: 'oneinchpunchline@gmail.com'},
          ]
      },
      {
          name: 'Tammy & Kyle',
          group: [
              {first: 'Tammy', last: 'Dang', email: 'dangtammyt@gmail.com'},
              {first: 'Kyle', last: 'Williams', email: ''},
          ]
      },
      {
          name: 'Aaron & Michelle',
          group: [
              {first: 'Aaron', last: 'Ho', email: 'aaron.y.ho@gmail.com'},
              {first: 'Michelle', last: 'Tsai', email: 'mtsai1224@gmail.com'},
              {first: 'Jeff', last: 'Tsai', email: 'jtsai518@gmail.com'},
          ]
      },      {
          name: 'Jennifer & Alfred',
          group: [
              {first: 'Jennifer', last: 'Luh', email: 'jfcubed@gmail.com'},
              {first: 'Alfred', last: 'Wang', email: 'alfr3d@gmail.com'},
          ]
      },
      {
          name: 'Will & Simon',
          group: [
              {first: 'Will', last: 'Hsiao', email: 'william.z.hsiao@gmail.com'},
              {first: 'Simon', last: 'Todd', email: 'sjtsimontodd@gmail.com '},
          ]
      },
      {
          name: 'Alan & Apple',
          group: [
              {first: 'Alan', last: 'Tsai', email: 'alantsai8@gmail.com'},
              {first: 'Apple', last: 'Yap', email: 'achuayap@gmail.com'},
          ]
      },      {
          name: 'Alex & Melissa',
          group: [
              {first: 'Alex', last: 'Chou', email: 'choualexander@gmail.com'},
              {first: 'Melissa', last: 'Pangilinan', email: 'misa.p.pang@gmail.com'},
          ]
      },
      {
          name: 'Emily & Brian',
          group: [
              {first: 'Emily', last: 'Yu', email: 'emilyyu88@gmail.com'},
              {first: 'Brian', last: 'Hu', email: ''},
          ]
      },
      {
          name: 'Wilson',
          group: [
              {first: 'Wilson', last: 'Huang', email: 'whuang3015@gmail.com'},
          ]
      },      {
          name: 'Amy Huang',
          group: [
              {first: 'Amy', last: 'Huang', email: 'lu2x4ah@pacbell.net'},
          ]
      },
      {
          name: 'Jerry & Elly',
          group: [
              {first: 'Jerry', last: 'Wang', email: 'wangust88@gmail.com'},
              {first: 'Elly', last: 'Lai', email: ''},
          ]
      },
      {
          name: 'Johnson & Joy',
          group: [
              {first: 'Johnson', last: 'Jou', email: 'Jjou20845@gmail.com'},
              {first: 'Joy', last: 'Inton', email: 'alphajoyinton@gmail.com'},
          ]
      },
      {
          name: 'Evelyn & Jorge',
          group: [
              {first: 'Evelyn', last: 'Saliga', email: 'Evelynma1011@gmail.con'},
              {first: 'Jorge', last: 'Saliga', email: ''},
          ]
      },
      {
          name: 'Tiffany & Henry',
          group: [
              {first: 'Tiffany', last: 'Liu', email: 'tiffany.st.liu@gmail.com'},
              {first: 'Henry', last: 'Shih', email: ''},
          ]
      },
      {
          name: 'Alan & Jessie',
          group: [
              {first: 'Alan', last: 'Kuo', email: 'alankuo1229@gmail.com'},
              {first: 'Jessie', last: 'Kuo', email: ''},
              {first: 'Kate', last: 'Kuo', email: ''},
          ]},
      {
          name: 'Tiffany Pan',
          group: [
              {first: 'Tiffany', last: 'Pan', email: 'tiffanypan32@gmail.com'},
              {first: 'Amanda', last: '', email: ''},
          ]
      },
      {
          name: 'Eric Shum',
          group: [
              {first: 'Eric', last: 'Shum', email: 'easalien@gmail.com'},
          ]
      },
      {
          name: 'Christina & Andy',
          group: [
              {first: 'Christina', last: 'Ling', email: 'christinaling837@gmail.com'},
              {first: 'Andy', last: 'Huang', email: ''},
          ]},
      {
          name: 'Bi-Shun & Alan',
          group: [
              {first: 'Bi-Shun', last: 'Zeng', email: 'bishun.zeng@gmail.com'},
              {first: 'Alan', last: 'Diec', email: 'alan.diec@gmail.com'},
          ]
      },
      {
          name: 'Chiarng Lin',
          group: [
              {first: 'Chiarng', last: 'Lin', email: 'chiarng@gmail.com'},
          ]
      },
      {
          name: 'John & Phoebe',
          group: [
              {first: 'John', last: 'Yu', email: 'johnxy888@gmail.com'},
              {first: 'Phoebe', last: 'Yu', email: 'plsuen@gmail.com'},
              {first: 'Kellan', last: 'Yu', email: ''},
          ]},
      {
          name: 'Tina & Jeff',
          group: [
              {first: 'Tina', last: 'Ho', email: 'tinaho18@gmail.com'},
              {first: 'Jeff', last: 'Tang', email: ''},
          ]
      },
      {
          name: 'Lulu & Mike',
          group: [
              {first: 'Lulu', last: 'Qin', email: 'ylqin458@gmail.com'},
              {first: 'Mike', last: 'Neubauer', email: 'neubauermike@gmail.com'},
          ]
      },
      {
          name: 'Chang & Andrew',
          group: [
              {first: 'Chang', last: 'Lu', email: 'changlu531@gmail.com'},
              {first: 'Andrew', last: 'Chen', email: 'ajwchen@gmail.com'},
          ]},
      {
          name: 'Nina & David',
          group: [
              {first: 'Nina', last: 'Lu', email: 'g.ninalu@gmail.com'},
              {first: 'David', last: 'Lerner', email: ''},
          ]
      },
      {
          name: 'Steven & Tiffany',
          group: [
              {first: 'Steven', last: 'Lu', email: 'slumeister88@gmail.com'},
              {first: 'Tiffany', last: 'Vo', email: 'strwbryslushie@gmail.com '},
          ]
      },
      {
          name: 'Vania & Brian',
          group: [
              {first: 'Vania', last: 'Leung', email: 'vleung508@gmail.com'},
              {first: 'Brian', last: 'Lin', email: 'brianklin@gmail.com '},
          ]},
      {
          name: 'Emily & Ethan',
          group: [
              {first: 'Emily', last: 'Escovar', email: 'emilyescovar@gmail.com'},
              {first: 'Ethan', last: 'Goldblum', email: ''},
          ]
      },
      {
          name: 'Byron & Robin',
          group: [
              {first: 'Byron', last: 'Cheng', email: 'byroncheng@gmail.com'},
              {first: 'Robin', last: 'Lin', email: 'Rlin29@gmail'},
          ]
      },
      {
          name: 'Sandra & Jon',
          group: [
              {first: 'Sandra', last: 'Shi', email: 'sansan.smile@gmail.com'},
              {first: 'Jon', last: 'Hu', email: ''},
          ]},
      {
          name: 'Steve Cho',
          group: [
              {first: 'Steve', last: 'Cho', email: 'cho.steve.e@gmail.com'},
          ]
      },
      {
          name: 'Bradford & Amy',
          group: [
              {first: 'Bradford', last: 'Chong', email: 'bradfordjchong@gmail.com'},
              {first: 'Amy', last: 'Chen', email: ''},
          ]
      },
      {
          name: 'Vennesa & Jeremy',
          group: [
              {first: 'Vennesa', last: 'Yung', email: 'vennesayung@gmail.com'},
              {first: 'Jeremy', last: 'Li', email: 'ilymerej@gmail.com'},
          ]},
      {
          name: 'Angela Wang Whittington',
          group: [
              {first: 'Angela', last: 'Wang Whittington', email: 'aw0319@gmail.com'},
              {first: 'Adam', last: 'Whittington', email: ''},
              {first: 'Ada', last: 'Whittington', email: ''},
          ]
      },
      {
          name: 'Deyra & Lyanne',
          group: [
              {first: 'Deyra', last: 'Rodriguez', email: 'deyra.j324@gmail.com'},
              {first: 'Lyanne', last: 'Rodriguez', email: 'lyanne.eliza.rodriguez@gmail.com'},
          ]
      },
      {
          name: 'The Marrens',
          group: [
              {first: 'John', last: 'Marren', email: ''},
              {first: 'Lynda', last: 'Marren', email: 'lyndamarren@gmail.com'},
              {first: 'James', last: 'Marren', email: 'james.marren@menloschool.org'},
          ]
      },
      {
          name: 'Morgan Davidson',
          group: [
              {first: 'Morgan', last: 'Davidson', email: 'morganrdavidson@gmail.com'},
          ]
      },
      {
          name: 'Tim & Aimy',
          group: [
              {first: 'Tim', last: 'Shen', email: 'tks212@gmail.com'},
              {first: 'Aimy', last: 'Tran', email: 'angelaimy@gmail.com'},
          ]
      },
      {
          name: 'The Maluths',
          group: [
              {first: 'Hannah', last: 'Maluth', email: ''},
              {first: 'Sharon', last: 'Maluth', email: ''},
              {first: 'Elliot', last: 'Maluth', email: ''},
          ]},
      {
          name: 'Jim & Mai',
          group: [
              {first: 'Jim', last: 'Shen', email: 'jim.k.shen@gmail.com'},
              {first: 'Mai', last: 'Le', email: 'Mai.t.le@gmail.com'},
          ]
      },
      {
          name: 'The Criscis',
          group: [
              {first: 'Amanda', last: 'Crisci', email: 'acrisci@umich.edu'},
              {first: 'Joseph', last: 'Crisci', email: ''},
              {first: 'Tina', last: 'Crisci', email: 'tinapcrisci@gmail.com'},
              {first: 'Paul', last: 'Crisci', email: ''},
              {first: '', last: '', email: ''},
          ]
      },
      {
          name: 'The Guardinos',
          group: [
             {first: 'Katie', last: 'Guardino', email: 'katieguardino@gmail.com'},
             {first: 'Ellie', last: 'Guardino', email: 'Guardino.ellie@gene.com'},
             {first: 'Jeff', last: 'Guardino', email: ''},
          ]
      }
  ]

  rsvps.each do |rsvp_group|
    next if rsvp_group[:name] == 'GROUP_NAME'

    group_name = rsvp_group[:name]
    group = RsvpGroup.find_by(name: group_name)
    group = RsvpGroup.create(name: group_name) unless group

    rsvp_group[:group].each do |rsvp|
      found_rsvp = Rsvp.find_by(first_name: rsvp[:first],
                   last_name: rsvp[:last],
                   email: rsvp[:email],
                   rsvp_group_id: group.id)

      Rsvp.create(first_name: rsvp[:first],
                  last_name: rsvp[:last],
                  email: rsvp[:email],
                  rsvp_group_id: group.id) unless found_rsvp
    end
  end
end