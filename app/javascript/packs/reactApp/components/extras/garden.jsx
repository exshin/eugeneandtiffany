//
/*

Grid-based game in which you play a catnip farmer

Grow catnip, earn coins, and buy upgrades

Tile click progression:
  Empty > Tilled > Seeded > Growth > Harvest
  Weeds > Empty
  Rocks > Broken Rocks > Empty


Each click is 1 turn.
Each turn / each tile has a possible event
  Weeds > Rocks
  Empty > Weeds
  Tilled > Empty
  Growth > Empty (neighbor's cat comes to eat and leaves more coin - rare event)

Game over when all grids are filled with Rocks or Broken Rocks


 |---|---|---|---|
 | w |   | g |   |
 |---|---|---|---|
 |   | w | g |   |
 |---|---|---|---|
 |   |   | s |   |
 |---|---|---|---|
 |   | w |   |   |
 |---|---|---|---|


Upgrades                   | Cost | Effect
  Hoe                        5      Weeds > Tilled
  Organic Catnip Seeds       5      Harvest gains more coins
  Fancy Cat Toy              5      Cat event occurs more frequently
  Spreading Catnip Variety   8      Seeds sometimes randomly appear on Tilled tiles
  Better Soil                8      Weeds less likely to turn into Rocks



*/
