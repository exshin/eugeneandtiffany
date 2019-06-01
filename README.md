# README

* Ruby version: 2.5.3

* Configuration

* Database setup
 - `bundle exec rake db:setup`
 - `bundle exec rake db:migrate`
 
* To Annotate Models
 - `bundle exec annotate`

* Deployment instructions
 - Deployed via Heroku/ Github
 - Push to github master branch and heroku will auto-deploy

* Local dev mode
 - `bundle install`
 - `npm install`
 - `yarn install`
 - `foreman start -f Procfile.dev -p 3000`
 
* Heroku
 - rails console -> heroku run rails console -a eugeneandtiffany
 - migrations -> heroku run rake db:migrate -a eugeneandtiffany
 - rake tasks -> heroku run rake rake_task -a eugeneandtiffany
