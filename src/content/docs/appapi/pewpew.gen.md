---
title: PewPew API
slug: appapi/pewpew
sidebar:
  order: 1
---

<!-- This is an auto-generated file. To modify it, change utils/generate_api.py in Hybroid's repository. -->

## Enums

### `EntityType`

- `Asteroid`
- `YellowBaf`
- `Inertiac`
- `Mothership`
- `MothershipBullet`
- `RollingCube`
- `RollingSphere`
- `Ufo`
- `Wary`
- `Crowder`
- `CustomizableEntity`
- `Ship`
- `Bomb`
- `BafBlue`
- `BafRed`
- `WaryMissile`
- `UfoBullet`
- `Spiny`
- `SuperMothership`
- `PlayerBullet`
- `BombExplosion`
- `PlayerExplosion`
- `Bonus`
- `FloatingMessage`
- `Pointonium`
- `Kamikaze`
- `BonusImplosion`
- `Mace`
- `PlasmaField`

### `MothershipType`

- `Triangle`
- `Square`
- `Pentagon`
- `Hexagon`
- `Heptagon`

### `CannonType`

- `Single`
- `TicToc`
- `Double`
- `Triple`
- `FourDirections`
- `DoubleSwipe`
- `Hemisphere`
- `Shotgun`
- `Laser`

### `CannonFrequency`

- `Freq30`
- `Freq15`
- `Freq10`
- `Freq7_5`
- `Freq6`
- `Freq5`
- `Freq3`
- `Freq2`
- `Freq1`

### `BombType`

- `Freeze`
- `Repulsive`
- `Atomize`
- `SmallAtomize`
- `SmallFreeze`

### `MaceType`

- `DamagePlayers`
- `DamageEntities`

### `BonusType`

- `Reinstantiation`
- `Shield`
- `Speed`
- `Weapon`
- `Mace`

### `WeaponType`

- `Bullet`
- `FreezeExplosion`
- `RepulsiveExplosion`
- `AtomizeExplosion`
- `PlasmaField`
- `WallTrailLasso`
- `Mace`

### `AsteroidSize`

- `Small`
- `Medium`
- `Large`
- `Huge`

## Functions

### `Print`
```rs
Print(text str) 
```
Prints `str` in the console for debugging.

### `PrintDebugInfo`
```rs
PrintDebugInfo() 
```
Prints debug info: the number of entities created and the amount of memory used by the script.

### `SetLevelSize`
```rs
SetLevelSize(fixed width, fixed height) 
```
Sets the level's size. Implicitly adds walls to make sure that entities can not go outside of the level's boundaries. `width` and `height` are clamped to the range ]0fx, 6000fx]. If this function is not called, the level size is (10fx, 10fx), which is uselessly small for most cases.

### `AddWall`
```rs
AddWall(fixed startX, fixed startY, fixed endX, fixed endY) -> number
```
Adds a wall to the level from (`startX`,`startY`) to (`endX`,`endY`), and returns its wall ID. A maximum of 200 walls can be added to a level.

### `RemoveWall`
```rs
RemoveWall(number wallId) 
```
Remove the wall with the given `wallId`.

### `AddUpdateCallback`
```rs
AddUpdateCallback(fn updateCallback) 
```
Adds a callback that will be updated at each game tick.

### `GetNumberOfPlayers`
```rs
GetNumberOfPlayers() -> number
```
Returns the number of players in the game.

### `IncreaseScoreOfPlayer`
```rs
IncreaseScoreOfPlayer(number playerIndex, number delta) 
```
Increases the score of the player at the specified `playerIndex` by an amount of `delta`. `playerIndex` must in the range [0, get_number_of_players() - 1]. Note that `delta` can be negative.

### `IncreaseScoreStreakOfPlayer`
```rs
IncreaseScoreStreakOfPlayer(number playerIndex, number delta) 
```
Increases the score streak counter of the player at the specified `playerIndex` by an amount of `delta`. This counter is used to determine at which level of score streak the player is at. In turn, the score streak level is used to determine how much pointonium is given. Typically the score streak counter should be increased when an enemy is destroyed with the same score that the enemy provide. `playerIndex` must in the range [0, get_number_of_players() - 1]. Note that `delta` can be negative.

### `GetScoreStreakLevel`
```rs
GetScoreStreakLevel(number playerIndex) -> number
```
Returns a number between 0 and 3. 0 is the lowest score streak (no pointonium is given), while 3 is the highest (3 pointoniums is usually given)

### `StopGame`
```rs
StopGame() 
```
Ends the current game.

### `GetPlayerInputs`
```rs
GetPlayerInputs(number playerIndex) -> fixed, fixed, fixed, fixed
```
Returns the inputs of the player at the specified `index`. The return values are in order: the movement joystick's angle (between 0 and 2pi), the movement joystick's distance (between 0 and 1), the shoot joystick's angle (between 0 and 2pi), and the shoot joystick's distance (between 0 and 1).

### `GetScoreOfPlayer`
```rs
GetScoreOfPlayer(number playerIndex) -> number
```
Returns the score of the player at the specified `playerIndex`. `playerIndex` must in the range [0, get_number_of_players() - 1].

### `ConfigurePlayer`
```rs
ConfigurePlayer(number playerIndex, struct {
  bool hasLost
  number shield
  fixed cameraXOverride
  fixed cameraYOverride
  fixed cameraDistance
  fixed cameraRotationXAxis
  number moveJoystickColor
  number shootJoystickColor
}) 
```
Configures the player at the specified `playerIndex`. `playerIndex` must in the range [0, get_number_of_players() - 1]. A `cameraDistance` less than 0fx makes the camera move away from the ship. `cameraRotationXAxis` is in radian and rotates along the X axis. To temporarily override the XY position of the camera, set **both** `cameraXOverride` and `cameraYOverride`; this will make the camera be interpolated from wherever it was, to that new position.

### `ConfigurePlayerHud`
```rs
ConfigurePlayerHud(number playerIndex, struct {
  text topLeftLine
}) 
```
Configures the player's HUD.`playerIndex` must in the range [0, get_number_of_players() - 1].

### `GetPlayerConfiguration`
```rs
GetPlayerConfiguration(number playerIndex) -> struct
```
Returns a map containing the configuration of the player at the specified `playerIndex`.

### `ConfigurePlayerShipWeapon`
```rs
ConfigurePlayerShipWeapon(entity shipId, struct {
  number frequency
  number cannon
  number duration
}) 
```
Configures the weapon of the ship identified with `shipId` using `configuration`. `frequency` determines the frequency of the shots. `cannon` determines the type of cannon. `duration` determines the number of game ticks during which the weapon will be available. Once the duration expires, the weapon reverts to its permanent configuration. If `duration` is omitted, the weapon will be permanently set to this configuration. If `frequency` or `cannon` is omitted, the ship is configured to not have any weapon.

### `ConfigurePlayerShipWallTrail`
```rs
ConfigurePlayerShipWallTrail(entity shipId, struct {
  number wallLength
}) 
```
Configures a wall trail that kills everything inside when the ship it is attached to creates a loop with it. `wallLength` is clamped to  [100, 4000]. In Partitioner, the length is 2000. If `wallLength` is not specified, the trail is removed.

### `ConfigurePlayerShip`
```rs
ConfigurePlayerShip(entity shipId, struct {
  bool swapInputs
}) 
```
Configures various properties of the player ship identified by`id`

### `AddDamageToPlayerShip`
```rs
AddDamageToPlayerShip(entity shipId, number damage) 
```
Reduces the amount of shield of the player that owns the ship by `damage` points. If the player receives damage while having 0 shields left, the player loses.

### `AddArrowToPlayerShip`
```rs
AddArrowToPlayerShip(entity shipId, entity targetId, number color) -> number
```
Adds an arrow to the ship identified with `shipId` pointing towards the entity identified with `entityId`, and returns the identifier of the arrow. `color` specifies the arrow's color. The arrow is automatically removed when the target entity is destroyed.

### `RemoveArrowFromPlayerShip`
```rs
RemoveArrowFromPlayerShip(entity shipId, number arrowId) 
```
Removes the arrow identified by `arrowId` from the ship identified by `shipId`.

### `MakePlayerShipTransparent`
```rs
MakePlayerShipTransparent(entity shipId, number transparencyDuration) 
```
Makes the player ship transparent for `transparencyDuration` game ticks.

### `SetPlayerShipSpeed`
```rs
SetPlayerShipSpeed(entity shipId, fixed factor, fixed offset, number duration) -> fixed
```
Sets and returns the **effective speed** of the specified player ship as a function of the **base speed** of the ship. By default, a player ship moves according to its base speed, which is 10 distance units per tick (in the future, different ships may have different base speeds). Assuming the base speed of the ship is S, the new effective speed will be `(factor*S)+offset`. `duration` is the number of ticks during which the effective speed will be applied. Afterwards, the ship's speed reverts to its base speed. If `duration` is negative, the effective speed never reverts to the base speed.

### `GetAllEntities`
```rs
GetAllEntities() -> list
```
Returns the list of the entityIDs of all the entities currently in the level. This includes the various bullets and *all* the custom entities.

### `GetEntitiesCollidingWithDisk`
```rs
GetEntitiesCollidingWithDisk(fixed centerX, fixed centerY, fixed radius) -> list
```
Returns the list of collidable entities (which includes all enemies) that overlap with the given disk.

### `GetEntityCount`
```rs
GetEntityCount(number type) -> number
```
Returns the number of entities of type `type` that are alive.

### `GetEntityType`
```rs
GetEntityType(entity entityId) -> number
```
Returns the type of the given entity.

### `PlayAmbientSound`
```rs
PlayAmbientSound(text soundPath, number index) 
```
Plays the sound described at `soundPath` at the index `index`.

### `PlaySound`
```rs
PlaySound(text soundPath, number index, fixed x, fixed y) 
```
Plays the sound described at `soundPath` at the in-game location of `x`,`y`.

### `CreateExplosion`
```rs
CreateExplosion(fixed x, fixed y, number color, fixed scale, number particleCount) 
```
Creates an explosion of particles at the location `x`,`y`. `color` specifies the color of the explosion. `scale` describes how large the explosion will be. It should be in the range ]0, 10], with 1 being an average explosion. `particleCount` specifies the number of particles that make up the explosion. It must be in the range [1, 100].

### `AddParticle`
```rs
AddParticle(fixed x, fixed y, fixed z, fixed dx, fixed dy, fixed dz, number color, number duration) 
```
Adds a particle at the given position, that moves at the given speed, with the given color and duration. The engine may not spawn all particles if are already a lot of particles alive already spawned (e.g. more than 1000)

### `NewAsteroid`
```rs
NewAsteroid(fixed x, fixed y) -> entity
```
Creates a new Asteroid at the location `x`,`y` and returns its entityId.

### `NewAsteroidWithSize`
```rs
NewAsteroidWithSize(fixed x, fixed y, number size) -> entity
```
Creates a new Asteroid at the location `x`,`y` with an AsteroidSize given by `size` and returns its entityId.

### `NewBaf`
```rs
NewBaf(fixed x, fixed y, fixed angle, fixed speed, number lifetime) -> entity
```
Creates a new BAF at the location `x`,`y`, and returns its entityId. `angle` specifies the angle at which the BAF will move. `speed` specifies the maximum speed it will reach. `lifetime` indicates the number of game ticks after which the BAF is destroyed the next time it hits a wall. Specify a negative `lifetime` to create a BAF that lives forever.

### `NewBafRed`
```rs
NewBafRed(fixed x, fixed y, fixed angle, fixed speed, number lifetime) -> entity
```
Creates a new red BAF at the location `x`,`y`, and returns its entityId. A red BAF has more health points than a regular BAF. `angle` specifies the angle at which the BAF will move. `speed` specifies the maximum speed it will reach. `lifetime` indicates the number of game ticks after which the BAF is destroyed the next time it hits a wall. Specify a negative `lifetime` to create a BAF that lives forever.

### `NewBafBlue`
```rs
NewBafBlue(fixed x, fixed y, fixed angle, fixed speed, number lifetime) -> entity
```
Creates a new blue BAF at the location `x`,`y`, and returns its entityId. A blue BAF bounces on walls with a slightly randomized angle. `angle` specifies the angle at which the BAF will move. `speed` specifies the maximum speed it will reach. `lifetime` indicates the number of game ticks after which the BAF is destroyed the next time it hits a wall. Specify a negative `lifetime` to create a BAF that lives forever.

### `NewBomb`
```rs
NewBomb(fixed x, fixed y, number type) -> entity
```
Creates a new Bomb at the location `x`,`y`, and returns its entityId.

### `NewBonus`
```rs
NewBonus(fixed x, fixed y, number type, struct {
  number boxDuration
  number cannon
  number frequency
  number weaponDuration
  number numberOfShields
  fixed speedFactor
  fixed speedOffset
  number speedDuration
  fn takenCallback
}) -> entity
```
Creates a new Bonus at the location `x`,`y` of the type `type`, and returns its entityId. For shield bonuses, the option `numberOfShields` determines how many shields are given out. For weapon bonuses, the options `cannon`, `frequency`, `weaponDuration` have the same meaning as in `pewpew.configure_player_ship_weapon`. For speed bonuses, the options `speedFactor`, `speedOffset`,and `speedDuration` have the same meaning as in `setPlayerSpeed`. `takenCallback` is called when the bonus is taken, and is mandatory for the reinstantiation bonus. The callback receives as arguments the entity id of the bonus, the player id, and the ship's entity id. The default box duration is 400 ticks.

### `NewCrowder`
```rs
NewCrowder(fixed x, fixed y) -> entity
```
Creates a new Crowder at the location `x`,`y`, and returns its entityId.

### `NewFloatingMessage`
```rs
NewFloatingMessage(fixed x, fixed y, text str, struct {
  fixed scale
  fixed dz
  number ticksBeforeFade
  bool isOptional
}) -> entity
```
Creates a new floating message at the location `x`,`y`, with `str` as the message. The scale is a number that determines how large the  message will be. `1` is the default scale. `ticksBeforeFade` determines how many ticks occur before the message starts to fade out. `isOptional` can be used to tell the game if the message can be hidden depending on the user's UI settings.If not specified, `scale` is 1, `ticksBeforeFade` is 30 and `isOptional` is `false`. Returns the floating message's entityId.

### `NewCustomizableEntity`
```rs
NewCustomizableEntity(fixed x, fixed y) -> entity
```
Creates a new customizable entity at the location `x`,`y`, and returns its entityId.

### `NewInertiac`
```rs
NewInertiac(fixed x, fixed y, fixed acceleration, fixed angle) -> entity
```
Creates a new Inertiac at the location `x`,`y`, and returns its entityId. The inertiac will accelerate according to `acceleration`. It spawns with a random velocity in a direction specified by `angle`.

### `NewKamikaze`
```rs
NewKamikaze(fixed x, fixed y, fixed angle) -> entity
```
Creates a new Kamikaze at the location `x`,`y` that starts moving in the direction specified by `angle`.

### `NewMothership`
```rs
NewMothership(fixed x, fixed y, number type, fixed angle) -> entity
```
Creates a new Mothership at the location `x`,`y`, and returns its entityId.

### `NewMothershipBullet`
```rs
NewMothershipBullet(fixed x, fixed y, fixed angle, fixed speed, number color, bool large) -> entity
```
Creates a new mothership bullet.

### `NewPointonium`
```rs
NewPointonium(fixed x, fixed y, number value) -> entity
```
Creates a new Pointonium at the location `x`,`y`. Value must be 64, 128, or 256.

### `NewPlasmaField`
```rs
NewPlasmaField(entity shipAId, entity shipBId, struct {
  fixed length
  fixed stiffness
}) -> entity
```
Creates a new plasma field between `shipA` and `shipB`, and returns its entityId. If `shipA` or `shipB` is destroyed, the plasma field is destroyed as well. `length` is optional, and specifies the length of the plasma field (defaut is 150). `stiffness` is optional, and specifies the stiffness of the plasma field (default is 1)

### `NewPlayerShip`
```rs
NewPlayerShip(fixed x, fixed y, number playerIndex) -> entity
```
Creates a new Player Ship at the location `x`,`y` for the player identified by `playerIndex`, and returns its entityId.

### `NewPlayerBullet`
```rs
NewPlayerBullet(fixed x, fixed y, fixed angle, number playerIndex) -> entity
```
Creates a new bullet at the location `x`,`y` with the angle `angle` belonging to the player at the index `playerIndex`. Returns the entityId of the bullet.

### `NewRollingCube`
```rs
NewRollingCube(fixed x, fixed y) -> entity
```
Creates a new Rolling Cube at the location `x`,`y`, and returns its entityId.

### `NewRollingSphere`
```rs
NewRollingSphere(fixed x, fixed y, fixed angle, fixed speed) -> entity
```
Creates a new Rolling Sphere at the location `x`,`y`, and returns its entityId.

### `NewSpiny`
```rs
NewSpiny(fixed x, fixed y, fixed angle, fixed attractivity) -> entity
```
Creates a new Spiny at the location `x`,`y` that starts moving in the direction specified by `angle`. `attractivity` specifies how much the Spiny is attracted to the closest player: 1fx is normal attractivity.

### `NewSuperMothership`
```rs
NewSuperMothership(fixed x, fixed y, number type, fixed angle) -> entity
```
Creates a new Super Mothership at the location `x`,`y`, and returns its entityId.

### `NewWary`
```rs
NewWary(fixed x, fixed y) -> entity
```
Creates a new Wary at the location `x`,`y`.

### `NewUfo`
```rs
NewUfo(fixed x, fixed y, fixed dx) -> entity
```
Creates a new UFO at the location `x`,`y` moving horizontally at the speed of `dx`, and returns its entityId.

### `RollingCubeSetEnableCollisionsWithWalls`
```rs
RollingCubeSetEnableCollisionsWithWalls(entity entityId, bool collideWithWalls) 
```
Sets whether the rolling cube identified with `id` collides with walls. By default it does not.

### `UfoSetEnableCollisionsWithWalls`
```rs
UfoSetEnableCollisionsWithWalls(entity entityId, bool collideWithWalls) 
```
Sets whether the ufo identified with `id` collides with walls. By default it does not.

### `EntityGetPosition`
```rs
EntityGetPosition(entity entityId) -> fixed, fixed
```
Returns the position of the entity identified by `id`.

### `EntityGetIsAlive`
```rs
EntityGetIsAlive(entity entityId) -> bool
```
Returns whether the entity identified by `id` is alive or not.

### `EntityGetIsStartedToBeDestroyed`
```rs
EntityGetIsStartedToBeDestroyed(entity entityId) -> bool
```
Returns whether the entity identified by `id` is in the process of being destroyed. Returns false if the entity does not exist.

### `EntitySetPosition`
```rs
EntitySetPosition(entity entityId, fixed x, fixed y) 
```
Sets the position of the entity identified by `id` to `x`,`y`

### `EntityMove`
```rs
EntityMove(entity entityId, fixed dx, fixed dy) 
```
Attempts to move the entity identified by `id` by `dx`,`dy`. Movement will be blocked by walls.

### `EntitySetRadius`
```rs
EntitySetRadius(entity entityId, fixed radius) 
```
Sets the radius of the entity identified by `id`. To give you a sense of scale, motherships have a radius of 28fx.

### `EntitySetUpdateCallback`
```rs
EntitySetUpdateCallback(entity entityId, fn callback) 
```
Sets a callback that will be called at every tick as long as the entity identified by `id` is alive. Remove the callback by passing a nil `callback`. The callbacks gets called with the entity ID.

### `EntityDestroy`
```rs
EntityDestroy(entity entityId) 
```
Makes the entity identified by `id` immediately disappear forever.

### `EntityReactToWeapon`
```rs
EntityReactToWeapon(entity entityId, struct {
  number type
  fixed x
  fixed y
  number playerIndex
}) -> bool
```
Makes the entity identified by `id` react to the weapon described in `weaponDescription`. Returns whether the entity reacted to the weapon. The returned value is typically used to decide whether the weapon should continue to exist or not. In the case of an explosion, `x` and `y` should store the origin of the explosion. In the case of a bullet, `x` and `y` should store the vector of the bullet. The player identified by `playerIndex` will be assigned points. If `playerIndex` is invalid, no player will be assigned points.

### `EntityAddMace`
```rs
EntityAddMace(entity targetId, struct {
  fixed distance
  fixed angle
  fixed rotationSpeed
  number type
}) -> entity
```
Adds a mace to the entity identified with `entityId`. If `rotationSpeed` exists, the mace will have a natural rotation, otherwise it will move due to inertia.

### `CustomizableEntitySetPositionInterpolation`
```rs
CustomizableEntitySetPositionInterpolation(entity entityId, bool enable) 
```
Sets whether the position of the mesh wil be interpolated when rendering. In general, this should be set to true if the entity will be moving.

### `CustomizableEntitySetAngleInterpolation`
```rs
CustomizableEntitySetAngleInterpolation(entity entityId, bool enable) 
```
Sets whether the angle of the mesh wil be interpolated when rendering. Angle interpolation is enabled by default.

### `CustomizableEntitySetMesh`
```rs
CustomizableEntitySetMesh(entity entityId, text filePath, number index) 
```
Sets the mesh of the customizable entity identified by `id` to the mesh described in the file `filePath` at the index `index`. `index` starts at 0. If `filePath` is an empty string, the mesh is removed.

### `CustomizableEntitySetFlippingMeshes`
```rs
CustomizableEntitySetFlippingMeshes(entity entityId, text filePath, number index0, number index1) 
```
Similar to `customizableEntitySetMesh`, but sets two meshes that will be used in alternation. By specifying 2 separate meshes, 60 fps animations can be achieved.

### `CustomizableEntitySetMeshColor`
```rs
CustomizableEntitySetMeshColor(entity entityId, number color) 
```
Sets the color multiplier for the mesh of the customizable entity identified by `id`.

### `CustomizableEntitySetString`
```rs
CustomizableEntitySetString(entity entityId, text text) 
```
Sets the string to be displayed as part of the mesh of the customizable entity identified by `id`.

### `CustomizableEntitySetMeshXyz`
```rs
CustomizableEntitySetMeshXyz(entity entityId, fixed x, fixed y, fixed z) 
```
Sets the position of the mesh to x,y,z, relative to the center of the customizable entity identified by `id`

### `CustomizableEntitySetMeshZ`
```rs
CustomizableEntitySetMeshZ(entity entityId, fixed z) 
```
Sets the height of the mesh of the customizable entity identified by `id`. A `z` greater to 0 makes the mesh be closer, while a `z` less than 0 makes the mesh be further away.

### `CustomizableEntitySetMeshScale`
```rs
CustomizableEntitySetMeshScale(entity entityId, fixed scale) 
```
Sets the scale of the mesh of the customizable entity identified by `id`. A `scale` less than 1 makes the mesh appear smaller, while a `scale` greater than 1 makes the mesh appear larger.

### `CustomizableEntitySetMeshXyzScale`
```rs
CustomizableEntitySetMeshXyzScale(entity entityId, fixed xScale, fixed yScale, fixed zScale) 
```
Sets the scale of the mesh of the customizable entity identified by `id` along the x,y,z axis. A `scale` less than 1 makes the mesh appear smaller, while a `scale` greater than 1 makes the mesh appear larger.

### `CustomizableEntitySetMeshAngle`
```rs
CustomizableEntitySetMeshAngle(entity entityId, fixed angle, fixed xAxis, fixed yAxis, fixed zAxis) 
```
Sets the rotation angle of the mesh of the customizable entity identified by `id`. The rotation is applied along the axis defined by `xAxis`,`yAxis`,`zAxis`.

### `CustomizableEntitySkipMeshAttributesInterpolation`
```rs
CustomizableEntitySkipMeshAttributesInterpolation(entity entityId) 
```
Skips the interpolation of the mesh's attributes (x, y, z, scale_x, scale_y, scale_z, rotation) for one tick. Only applies to the attributes that were set before the call to `customizableEntitySkipMeshAttributesInterpolation`

### `CustomizableEntityConfigureMusicResponse`
```rs
CustomizableEntityConfigureMusicResponse(entity entityId, struct {
  number colorStart
  number colorEnd
  fixed scaleXStart
  fixed scaleXEnd
  fixed scaleYStart
  fixed scaleYEnd
  fixed scaleZStart
  fixed scaleZEnd
}) 
```
Configures the way the entity is going to respond to the music.

### `CustomizableEntityAddRotationToMesh`
```rs
CustomizableEntityAddRotationToMesh(entity entityId, fixed angle, fixed xAxis, fixed yAxis, fixed zAxis) 
```
Adds a rotation to the mesh of the customizable entity identified by `id`. The rotation is applied along the axis defined by `xAxis`,`yAxis`,`zAxis`.

### `CustomizableEntitySetVisibilityRadius`
```rs
CustomizableEntitySetVisibilityRadius(entity entityId, fixed radius) 
```
Sets the radius defining the visibility of the entity. This allows the game to know when an entity is actually visible, which in turns allows to massively optimize the rendering. Use the smallest value possible. If not set, the rendering radius is an unspecified large number that effectively makes the entity always be rendered, even if not visible.

### `CustomizableEntityConfigureWallCollision`
```rs
CustomizableEntityConfigureWallCollision(entity entityId, bool collideWithWalls, fn collisionCallback) 
```
`collideWithWalls` configures whether the entity should stop when colliding with walls. If `collisionCallback` is not nil, it is called anytime a collision is detected. The callback gets called with the entity id of the entity withthe callback, and with the normal to the wall.

### `CustomizableEntitySetPlayerCollisionCallback`
```rs
CustomizableEntitySetPlayerCollisionCallback(entity entityId, fn collisionCallback) 
```
Sets the callback for when the customizable entity identified by `id` collides with a player's ship. The callback gets called with the entity id of the entity with the callback, and the player_index and ship_id that were involved in the collision. Don't forget to set a radius on the customizable entity, otherwise no collisions will be detected.

### `CustomizableEntitySetWeaponCollisionCallback`
```rs
CustomizableEntitySetWeaponCollisionCallback(entity entityId, fn weaponCollisionCallback) 
```
Sets the callback for when the customizable entity identified by `id` collides with a player's weapon. The callback gets called with the entity_id of the entity on which the callback is set, the player_index of the player that triggered the weapon, and the type of the weapon. The callback *must* return a boolean saying whether the entity reacts to the weapon. In the case of a bullet, this boolean determines whether the bullet should be destroyed.

### `CustomizableEntityStartSpawning`
```rs
CustomizableEntityStartSpawning(entity entityId, number spawningDuration) 
```
Makes the customizable entity identified by `id` spawn for a duration of `spawningDuration` game ticks.

### `CustomizableEntityStartExploding`
```rs
CustomizableEntityStartExploding(entity entityId, number explosionDuration) 
```
Makes the customizable entity identified by `id` explode for a duration of `explosionDuration` game ticks. After the explosion, the entity is destroyed. `explosionDuration` must be less than 255. Any scale applied to the entity is also applied to the explosion.

### `CustomizableEntitySetTag`
```rs
CustomizableEntitySetTag(entity entityId, number tag) 
```
Sets a tag on customizable entities. The tag can be read back with `customizableEntityGetTag`.

### `CustomizableEntityGetTag`
```rs
CustomizableEntityGetTag(entity entityId) -> number
```
Returns the tag that was set, or 0 if no tag was set.
