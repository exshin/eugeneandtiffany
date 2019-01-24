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
              {first: 'TJ', last: 'Schwabenbauer', email: ''},
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
              {first: 'Jeff', last: 'Hsieh', email: ''},
              {first: 'Anne', last: 'Wu', email: ''},
          ]
      },
      {
          name: 'George & Fanny',
          group: [
              {first: 'George', last: 'Chin', email: ''},
              {first: 'Fanny', last: 'Halim', email: ''},
          ]
      },
      {
          name: 'Sarah & Alex',
          group: [
              {first: 'Sarah', last: 'Sheu', email: ''},
              {first: 'Alex', last: 'Sheu', email: ''},
              {first: 'Alice', last: 'Sheu', email: ''},
          ]
      },
  ]

  rsvps.each do |rsvp_group|
    group_name = rsvp_group[:name]
    group = RsvpGroup.create(name: group_name)

    rsvp_group[:group].each do |rsvp|
      Rsvp.create(first_name: rsvp[:first],
                  last_name: rsvp[:last],
                  email: rsvp[:email],
                  rsvp_group_id: group.id)
    end
  end
end