desc "Data for the guest book index"
task guest_book_index: :environment do

  guests_list = [
      [],
      ['Grandma Lin', 'Tim Chen', 'Annie Sung', 'Bella Chen', 'Dr. Hofu Wu', 'Mrs. Meina Wu', 'Martin Pham', 'Michelle Wu'],
      ['Michelle Wu', 'Joshua Pham'],
      ['Tim Chen', 'Annie Sung', 'Bella Chen', 'Dr. Hofu Wu', 'Mrs. Meina Wu', 'Martin Pham', 'Michelle Wu', 'Joshua Pham'],
      ['Tim Chen', 'Annie Sung', 'Bella Chen', 'Dr. Hofu Wu', 'Mrs. Meina Wu'],
      ['Annie Sung', 'Bella Chen', 'Dr. Hofu Wu', 'Mrs. Meina Wu', 'Michelle Wu', 'Joshua Pham'],
      ['Grandma Lin', 'Annie Sung', 'Bella Chen', 'Dr. Hofu Wu', 'Mrs. Meina Wu', 'Michelle Wu'],
      ['Gina Tantiudomrak', 'Leo Tantiudomrak', 'Mrs. Oggie Chon', 'Aunt Sue Schwaben', 'TJ Schwabenbauer', 'Dawn Schwabenbauer', 'Renee Schwabenbauer Braun', 'Haley Schwabenbauer', 'Jacob Schwabenbauer', 'Julian Braun'],
      ['Gina Tantiudomrak', 'Leo Tantiudomrak', 'Mrs. Oggie Chon'],
      ['Paul Chin', 'Gina Tantiudomrak', 'Leo Tantiudomrak', 'Mrs. Oggie Chon', 'TJ Schwabenbauer', 'Dawn Schwabenbauer', 'Renee Schwabenbauer Braun'],
      ['Gina Tantiudomrak', 'Leo Tantiudomrak', 'Mrs. Oggie Chon', 'Alex Topp', 'Dawn Schwabenbauer', 'Renee Schwabenbauer Braun', 'Julian Braun'],
      ['Eric Shum', 'Michelle Wu', 'Joshua Pham', 'Johnson Jou', 'Joy Inton'],
      ['Johnson Jou', 'Joy Inton'],
      ['Emily Yu', 'Tracy Pan', 'Tiffany Pan', 'Christina Hong', 'Anne Wu', 'Brian Hu', 'Jeff Hsieh', 'Andy Huang', 'Christina Ling'],
      ['Christina Hong', 'Anne Wu', 'Brian Hu', 'Jeff Hsieh'],
      ['Christina Ling', 'Andy Huang', 'Tiffany Pan', 'Jerry Wang', 'Tracy Pan', 'Tiffany Liu'],
      ['Will Ma', 'Jessica Cho'], #17
      ['Johnson Jou', 'David Zeng', 'George Chin', 'Jessica Cho', 'Alan Kuo', 'Emily Yu', 'Jerry Wang', 'Katie Kuo' , 'Jeff Hsieh'],
      ['Yuekai Sun', 'David Zeng', 'Jeff Hsieh', 'George Chin', 'Jerry Wang', 'Johnson Jou'],
      ['George Chin', 'Jeff Hsieh', 'Anne Wu', 'Will Hsiao','Emily Yu','Tiffany Pan','Tiffany Liu','Christina Ling','Tammy Dang','Michelle Tsai','Jerry Wang','Christina Hong','Elly Lai','Fanny Halim','Simon Todd','Henry Shih','Brian Lan','David Zeng'],
      ['George Chin', 'Jeff Hsieh', 'Anne Wu','Emily Yu','Tiffany Liu','Alfred Wang','Jennifer Luh','Jerry Wang','Tao Luo','Henry Shih','Lily Liu','David Zeng','Alan Tsai'],
      ['George Chin','Fanny Halim','Jeff Hsieh','Anne Wu','Tiffany Liu','Henry Shih','Tao Luo','Lily Liu','David Zeng','Michelle Tsai','Aaron Ho','Yuekai Sun','Hannah Lou','Miso Wu'], #22
      ['George Chin','Fanny Halim','Jeff Hsieh','Anne Wu','Emily Yu','Tiffany Liu','Henry Shih','Tao Luo','Lily Liu','David Zeng','Jessica Choy','Michelle Tsai','Aaron Ho','Yuekai Sun','Hannah Lou','Jennifer Luh','Alfred Wang','Brian Lan','Tammy Dang','Wilson Huang','Jerry Wang','Elly Lai','Will Hsiao','Christina Hong','Snowy Wu'],
      ['George Chin','Fanny Halim','Jeff Hsieh','Anne Wu','Emily Yu','Tiffany Liu','Henry Shih','Tao Luo','Lily Liu','David Zeng','Aaron Ho','Yuekai Sun','Hannah Lou','Brian Lan','Tammy Dang','Kyle Williams','Wilson Huang','Will Hsiao','Christina Hong','Kathy Nguyen','Johnson Jou','Joy Inton','Alex Chou','Melissa Pangilinan','Alan Tsai','Snowy Wu'],
      ['Tammy Dang','Alan Tsai','Apple Chua','Aaron Ho','Alex Chou','Melissa Pangilinan','Lily Liu','Tao Luo'], #25
      ['Aaron Ho','Michelle Tsai','Jeff Tsai','Will Hsiao','Emily Yu','Jennifer Luh','Alfred Wang','Tiffany Liu','Henry Shih'],
      ['George Chin','Fanny Halim','Anne Wu','Jeff Hsieh','Jennifer Luh','Alfred Wang','David Zeng','Jessica Choy','Johnson Jou'],
      ['Jeff Hsieh','Anne Wu','Lily Liu','Tao Luo'],
      ['Lily Liu','Tao Luo'], #29
      ['Jennifer Luh','Alfred Wang','Tammy Dang','Brian Lan'],
      ['Hannah Lou','Yuekai Sun','Shami Chin','Autumn Lou'],
      ['Chang Lu','Lulu Qin','Alex Sheu','Sarah Sheu','John Yu','Vania Leung'],  #32
      ['Chang Lu','Lulu Qin','Sarah Sheu','Amy Chen','Nina Lu'],
      ['Alex Sheu','Chang Lu','Lulu Qin','Sarah Sheu','Alice Sheu'],
      ['Amy Chen','Bradford Chong','Steven Lu','Sandra Shi','Lulu Qin','Chang Lu','Andrew Chen','Chiarng Lin','Byron Cheng'],
      ['Jenny Yoo','Sandra Shi','Lulu Qin','Tiffany Vo','Steven Lu','Phoebe Yu','John Yu','Byron Cheng','Jeremy Li','Calvin Kwan','Chiarng Lin','Wilmot Yeh','Lucy Liu'],
      ['Steven Lu','Tiffany Vo','Nina Lu','Lulu Qin','Mike Neubauer','Byron Cheng','Robin Lin'], #37
      ['Nina Lu','Lulu Qin','Vania Leung','Steven Lu','Tiffany Vo','Chiarng Lin','Sandra Shi','Brian Lin','Robin Lin'],
      ['Vania Leung','Brian Lin','Sandra Shi','Steven Lu','Tiffany Vo','Lulu Qin','Mike Neubauer','Chang Lu','Andrew Chen','Steve Cho','Calvin Kwan','John Yu','Phoebe Yu','Kellan Yu','Jon Hu','Byron Cheng','Chiarng Lin'],
      ['Chiarng Lin','Chang Lu','Andrew Chen','John Yu','Phoebe Yu','Kellan Yu','Steve Cho','Byron Cheng'],
      ['John Yu','Phoebe Yu','Kellan Yu','Bishun Zeng','Alan Diec'],
      ['John Yu','Phoebe Yu','Kellan Yu','Steve Cho','Byron Cheng','Tina Ho','Jeff Tang'],
      ['Bishun Zeng','Alan Diec','Steve Cho','Byron Cheng','Tina Ho','Jeff Tang'],
      ['Kathy Nguyen','Ben Beiny','Toby Nguyen'],
      ['Wilmot Yeh','Lucy Liu','John Yu','Phoebe Yu','Toby Yeh','Snowy Wu'], #45
      ['Amy Huang','Melissa Quan','Hope Nam Phung','Michael Phung','Claire Phung','Hiromi Nakano','Julia Berger','Jennifer Hu','Eric Lin','Alexa Lin','Evelyn Saliga','George Saliga'],
      [],
      ['Amanda Crisci','Elmo Crisci'],
      [],
      ['Lyanne Rodriguez','Deyra Rodriguez','James Marren','Katie Guardino','Charlie Marren'],
      []
  ]

  pages_hash = {}
  guests_list.each_with_index do |guests, index|
    guests.each do |guest|
      if pages_hash[guest]
        pages_hash[guest] << index + 1
      else
        pages_hash[guest] = [index + 1]
      end
    end
  end
  sorted = Hash[pages_hash.sort]

  sorted.each do |guest, pages|
    line = "#{guest}: "
    pages.each do |page|
      line += "#{page}, "
    end
    puts line.chop.chop
  end



end