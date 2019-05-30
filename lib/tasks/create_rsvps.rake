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
          name: 'GROUP_NAME',
          group: [
              {first: '', last: '', email: ''},
              {first: '', last: '', email: ''},
          ]
      },
      {
          name: 'GROUP_NAME',
          group: [
              {first: '', last: '', email: ''},
              {first: '', last: '', email: ''},
          ]
      },
      {
          name: 'GROUP_NAME',
          group: [
              {first: '', last: '', email: ''},
              {first: '', last: '', email: ''},
          ]
      },
      {
          name: 'GROUP_NAME',
          group: [
              {first: '', last: '', email: ''},
              {first: '', last: '', email: ''},
          ]
      },
      {
          name: 'GROUP_NAME',
          group: [
              {first: '', last: '', email: ''},
              {first: '', last: '', email: ''},
          ]
      },
      {
          name: 'GROUP_NAME',
          group: [
              {first: '', last: '', email: ''},
              {first: '', last: '', email: ''},
          ]
      },
      {
          name: 'GROUP_NAME',
          group: [
              {first: '', last: '', email: ''},
              {first: '', last: '', email: ''},
          ]
      },
      {
          name: 'GROUP_NAME',
          group: [
              {first: '', last: '', email: ''},
              {first: '', last: '', email: ''},
          ]
      },
      {
          name: 'GROUP_NAME',
          group: [
              {first: '', last: '', email: ''},
              {first: '', last: '', email: ''},
          ]
      },
      {
          name: 'GROUP_NAME',
          group: [
              {first: '', last: '', email: ''},
              {first: '', last: '', email: ''},
          ]
      },
      {
          name: 'GROUP_NAME',
          group: [
              {first: '', last: '', email: ''},
              {first: '', last: '', email: ''},
          ]
      },
      {
          name: 'GROUP_NAME',
          group: [
              {first: '', last: '', email: ''},
              {first: '', last: '', email: ''},
          ]
      },
      {
          name: 'GROUP_NAME',
          group: [
              {first: '', last: '', email: ''},
              {first: '', last: '', email: ''},
          ]
      },
      {
          name: 'GROUP_NAME',
          group: [
              {first: '', last: '', email: ''},
              {first: '', last: '', email: ''},
          ]
      },
      {
          name: 'GROUP_NAME',
          group: [
              {first: '', last: '', email: ''},
              {first: '', last: '', email: ''},
          ]
      },
      {
          name: 'GROUP_NAME',
          group: [
              {first: '', last: '', email: ''},
              {first: '', last: '', email: ''},
          ]
      },
      {
          name: 'GROUP_NAME',
          group: [
              {first: '', last: '', email: ''},
              {first: '', last: '', email: ''},
          ]
      },
      {
          name: 'GROUP_NAME',
          group: [
              {first: '', last: '', email: ''},
              {first: '', last: '', email: ''},
          ]
      },
      {
          name: 'GROUP_NAME',
          group: [
              {first: '', last: '', email: ''},
              {first: '', last: '', email: ''},
          ]
      },
      {
          name: 'GROUP_NAME',
          group: [
              {first: '', last: '', email: ''},
              {first: '', last: '', email: ''},
          ]
      },
      {
          name: 'GROUP_NAME',
          group: [
              {first: '', last: '', email: ''},
              {first: '', last: '', email: ''},
          ]
      },
      {
          name: 'GROUP_NAME',
          group: [
              {first: '', last: '', email: ''},
              {first: '', last: '', email: ''},
          ]
      },
      {
          name: 'GROUP_NAME',
          group: [
              {first: '', last: '', email: ''},
              {first: '', last: '', email: ''},
          ]
      },
      {
          name: 'GROUP_NAME',
          group: [
              {first: '', last: '', email: ''},
              {first: '', last: '', email: ''},
          ]
      },
      {
          name: 'GROUP_NAME',
          group: [
              {first: '', last: '', email: ''},
              {first: '', last: '', email: ''},
          ]
      },
      {
          name: 'GROUP_NAME',
          group: [
              {first: '', last: '', email: ''},
              {first: '', last: '', email: ''},
          ]
      },
      {
          name: 'GROUP_NAME',
          group: [
              {first: '', last: '', email: ''},
              {first: '', last: '', email: ''},
          ]
      },
      {
          name: 'GROUP_NAME',
          group: [
              {first: '', last: '', email: ''},
              {first: '', last: '', email: ''},
          ]
      },
      {
          name: 'GROUP_NAME',
          group: [
              {first: '', last: '', email: ''},
              {first: '', last: '', email: ''},
          ]
      },{
          name: 'GROUP_NAME',
          group: [
              {first: '', last: '', email: ''},
              {first: '', last: '', email: ''},
          ]
      },
      {
          name: 'GROUP_NAME',
          group: [
              {first: '', last: '', email: ''},
              {first: '', last: '', email: ''},
          ]
      },
      {
          name: 'GROUP_NAME',
          group: [
              {first: '', last: '', email: ''},
              {first: '', last: '', email: ''},
          ]
      },
      {
          name: 'GROUP_NAME',
          group: [
              {first: '', last: '', email: ''},
              {first: '', last: '', email: ''},
          ]
      },
      {
          name: 'GROUP_NAME',
          group: [
              {first: '', last: '', email: ''},
              {first: '', last: '', email: ''},
          ]
      },
      {
          name: 'GROUP_NAME',
          group: [
              {first: '', last: '', email: ''},
              {first: '', last: '', email: ''},
          ]
      },
      {
          name: 'GROUP_NAME',
          group: [
              {first: '', last: '', email: ''},
              {first: '', last: '', email: ''},
          ]
      },
      {
          name: 'GROUP_NAME',
          group: [
              {first: '', last: '', email: ''},
              {first: '', last: '', email: ''},
          ]
      },
      {
          name: 'GROUP_NAME',
          group: [
              {first: '', last: '', email: ''},
              {first: '', last: '', email: ''},
          ]
      },
      {
          name: 'GROUP_NAME',
          group: [
              {first: '', last: '', email: ''},
              {first: '', last: '', email: ''},
          ]
      },

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