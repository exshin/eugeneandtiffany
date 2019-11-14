# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_10_26_053528) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "blocks", force: :cascade do |t|
    t.string "name"
    t.integer "score"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "hunts", force: :cascade do |t|
    t.string "name"
    t.string "hexdigest"
    t.integer "progress"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "quizzes", force: :cascade do |t|
    t.string "name"
    t.integer "eugene_score"
    t.integer "tiffany_score"
    t.text "user_tiffany_answers"
    t.text "user_eugene_answers"
    t.datetime "created_at"
  end

  create_table "rsvp_groups", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at"
  end

  create_table "rsvps", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.boolean "attending"
    t.text "dietary_restrictions"
    t.integer "rsvp_group_id"
    t.datetime "updated_at"
    t.string "short_name"
    t.boolean "no_drink"
  end

  create_table "santa_excludeds", force: :cascade do |t|
    t.integer "santa_participant_id"
    t.integer "excluded_participant_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "santa_participants", force: :cascade do |t|
    t.string "name"
    t.string "address"
    t.string "email"
    t.string "wish_list"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "toby_games", force: :cascade do |t|
    t.string "name"
    t.integer "score"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tokens", force: :cascade do |t|
    t.string "hexdigest"
    t.boolean "admin"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
  end

end
