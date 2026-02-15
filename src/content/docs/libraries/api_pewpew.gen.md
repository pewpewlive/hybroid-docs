---
title: PewPew API
slug: libraries/pewpew
sidebar:
  order: 1
---

<!-- This is an auto-generated file. To modify it, change https://github.com/pewpewlive/hybroid/blob/master/utils/generate_api.py -->

## Enums

### `EntityType`

- `Asteroid`
- `YellowBAF`
- `Inertiac`
- `Mothership`
- `MothershipBullet`
- `RollingCube`
- `RollingSphere`
- `UFO`
- `Wary`
- `Crowder`
- `CustomizableEntity`
- `Ship`
- `Bomb`
- `BlueBAF`
- `RedBAF`
- `WaryMissile`
- `UFOBullet`
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
- `Laserbeam`
- `Exploder`
- `ExploderExplosion`
- `WeaponZone`

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

### `CannonFreq`

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
- `VeryLarge`

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
AddWall(fixed start_x, fixed start_y, fixed end_x, fixed end_y) -> number
```
Adds a wall to the level from (`start_x`,`start_y`) to (`end_x`,`end_y`), and returns its wall ID. A maximum of 200 walls can be added to a level.


### `RemoveWall`

```rs
RemoveWall(number wall_id)
```
Remove the wall with the given `wall_id`.


### `AddUpdateCallback`

```rs
AddUpdateCallback(fn())
```
Adds a callback that will be updated at each game tick.


### `GetNumberOfPlayers`

```rs
GetNumberOfPlayers() -> number
```
Returns the number of players in the game.


### `IncreasePlayerScore`

```rs
IncreasePlayerScore(number player_index, number delta)
```
Increases the score of the player at the specified `player_index` by an amount of `delta`. `player_index` must in the range [0, get_number_of_players() - 1]. Note that `delta` can be negative.


### `IncreasePlayerScoreStreak`

```rs
IncreasePlayerScoreStreak(number player_index, number delta)
```
Increases the score streak counter of the player at the specified `player_index` by an amount of `delta`. This counter is used to determine at which level of score streak the player is at. In turn, the score streak level is used to determine how much pointonium is given. Typically the score streak counter should be increased when an enemy is destroyed with the same score that the enemy provide. `player_index` must in the range [0, get_number_of_players() - 1]. Note that `delta` can be negative.


### `GetPlayerScoreStreak`

```rs
GetPlayerScoreStreak(number player_index) -> number
```
Returns a number between 0 and 3. 0 is the lowest score streak (no pointonium is given), while 3 is the highest (3 pointoniums is usually given)


### `StopGame`

```rs
StopGame()
```
Ends the current game.


### `GetPlayerInputs`

```rs
GetPlayerInputs(number player_index) -> (fixed, fixed, fixed, fixed)
```
Returns the inputs of the player at the specified `index`. The return values are in order: the movement joystick's angle (between 0 and 2pi), the movement joystick's distance (between 0 and 1), the shoot joystick's angle (between 0 and 2pi), and the shoot joystick's distance (between 0 and 1).


### `GetPlayerScore`

```rs
GetPlayerScore(number player_index) -> number
```
Returns the score of the player at the specified `player_index`. `player_index` must in the range [0, get_number_of_players() - 1].


### `ConfigurePlayer`

```rs
ConfigurePlayer(number player_index, struct{
    bool has_lost,
    number shield,
    fixed camera_x_override,
    fixed camera_y_override,
    fixed camera_distance,
    fixed camera_rotation_x_axis,
    number move_joystick_color,
    number shoot_joystick_color
})
```
Configures the player at the specified `player_index`. `player_index` must in the range [0, get_number_of_players() - 1]. A `camera_distance` less than 0fx makes the camera move away from the ship. `camera_rotation_x_axis` is in radian and rotates along the X axis. To temporarily override the XY position of the camera, set **both** `camera_x_override` and `camera_y_override`; this will make the camera be interpolated from wherever it was, to that new position.


### `ConfigurePlayerHud`

```rs
ConfigurePlayerHud(number player_index, struct{
    text top_left_line
})
```
Configures the player's HUD.`player_index` must in the range [0, get_number_of_players() - 1].


### `GetPlayerConfig`

```rs
GetPlayerConfig(number player_index) -> struct{
    number shield,
    bool has_lost
}
```
Returns a map containing the configuration of the player at the specified `player_index`.


### `ConfigureShipWeapon`

```rs
ConfigureShipWeapon(entity ship_id, struct{
    CannonFreq frequency,
    CannonType cannon,
    number duration
})
```
Configures the weapon of the ship identified with `ship_id` using `configuration`. `frequency` determines the frequency of the shots. `cannon` determines the type of cannon. `duration` determines the number of game ticks during which the weapon will be available. Once the duration expires, the weapon reverts to its permanent configuration. If `duration` is omitted, the weapon will be permanently set to this configuration. If `frequency` or `cannon` is omitted, the ship is configured to not have any weapon.


### `ConfigureShipWallTrail`

```rs
ConfigureShipWallTrail(entity ship_id, struct{
    number wall_length
})
```
Configures a wall trail that kills everything inside when the ship it is attached to creates a loop with it. `wall_length` is clamped to  [100, 4000]. In Partitioner, the length is 2000. If `wall_length` is not specified, the trail is removed.


### `ConfigureShip`

```rs
ConfigureShip(entity ship_id, struct{
    bool swap_inputs
})
```
Configures various properties of the player ship identified by`id`


### `DamageShip`

```rs
DamageShip(entity ship_id, number damage)
```
Reduces the amount of shield of the player that owns the ship by `damage` points. If the player receives damage while having 0 shields left, the player loses.


### `AddArrowToShip`

```rs
AddArrowToShip(entity ship_id, entity target_id, number color) -> number
```
Adds an arrow to the ship identified with `ship_id` pointing towards the entity identified with `entity_id`, and returns the identifier of the arrow. `color` specifies the arrow's color. The arrow is automatically removed when the target entity is destroyed.


### `RemoveArrowFromShip`

```rs
RemoveArrowFromShip(entity ship_id, number arrow_id)
```
Removes the arrow identified by `arrow_id` from the ship identified by `ship_id`.


### `MakeShipTransparent`

```rs
MakeShipTransparent(entity ship_id, number transparency_duration)
```
Makes the player ship transparent for `transparency_duration` game ticks.


### `SetShipSpeed`

```rs
SetShipSpeed(entity ship_id, fixed factor, fixed offset, number duration) -> fixed
```
Sets and returns the **effective speed** of the specified player ship as a function of the **base speed** of the ship. By default, a player ship moves according to its base speed, which is 10 distance units per tick (in the future, different ships may have different base speeds). Assuming the base speed of the ship is S, the new effective speed will be `(factor*S)+offset`. `duration` is the number of ticks during which the effective speed will be applied. Afterwards, the ship's speed reverts to its base speed. If `duration` is negative, the effective speed never reverts to the base speed.


### `GetAllEntities`

```rs
GetAllEntities() -> list<entity>
```
Returns the list of the entityIDs of all the entities currently in the level. This includes the various bullets and *all* the custom entities.


### `GetEntitiesInRadius`

```rs
GetEntitiesInRadius(fixed center_x, fixed center_y, fixed radius) -> list<entity>
```
Returns the list of collidable entities (which includes all enemies) that overlap with the given disk.


### `GetEntityCount`

```rs
GetEntityCount(EntityType type) -> number
```
Returns the number of entities of type `type` that are alive.


### `GetEntityType`

```rs
GetEntityType(entity entity_id) -> number
```
Returns the type of the given entity.


### `PlayAmbientSound`

```rs
PlayAmbientSound(SoundEnvironment sound_path, number index)
```
Plays the sound described at `sound_path` at the index `index`.


### `PlaySound`

```rs
PlaySound(SoundEnvironment sound_path, number index, fixed x, fixed y)
```
Plays the sound described at `sound_path` at the in-game location of `x`,`y`.


### `CreateExplosion`

```rs
CreateExplosion(fixed x, fixed y, number color, fixed scale, number particle_count)
```
Creates an explosion of particles at the location `x`,`y`. `color` specifies the color of the explosion. `scale` describes how large the explosion will be. It should be in the range ]0, 10], with 1 being an average explosion. `particle_count` specifies the number of particles that make up the explosion. It must be in the range [1, 100].


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
NewAsteroidWithSize(fixed x, fixed y, AsteroidSize size) -> entity
```
Creates a new Asteroid at the location `x`,`y` with an AsteroidSize given by `size` and returns its entityId.


### `NewYellowBAF`

```rs
NewYellowBAF(fixed x, fixed y, fixed angle, fixed speed, number lifetime) -> entity
```
Creates a new BAF at the location `x`,`y`, and returns its entityId. `angle` specifies the angle at which the BAF will move. `speed` specifies the maximum speed it will reach. `lifetime` indicates the number of game ticks after which the BAF is destroyed the next time it hits a wall. Specify a negative `lifetime` to create a BAF that lives forever.


### `NewRedBAF`

```rs
NewRedBAF(fixed x, fixed y, fixed angle, fixed speed, number lifetime) -> entity
```
Creates a new red BAF at the location `x`,`y`, and returns its entityId. A red BAF has more health points than a regular BAF. `angle` specifies the angle at which the BAF will move. `speed` specifies the maximum speed it will reach. `lifetime` indicates the number of game ticks after which the BAF is destroyed the next time it hits a wall. Specify a negative `lifetime` to create a BAF that lives forever.


### `NewBlueBAF`

```rs
NewBlueBAF(fixed x, fixed y, fixed angle, fixed speed, number lifetime) -> entity
```
Creates a new blue BAF at the location `x`,`y`, and returns its entityId. A blue BAF bounces on walls with a slightly randomized angle. `angle` specifies the angle at which the BAF will move. `speed` specifies the maximum speed it will reach. `lifetime` indicates the number of game ticks after which the BAF is destroyed the next time it hits a wall. Specify a negative `lifetime` to create a BAF that lives forever.


### `NewBomb`

```rs
NewBomb(fixed x, fixed y, BombType type) -> entity
```
Creates a new Bomb at the location `x`,`y`, and returns its entityId.


### `NewBonus`

```rs
NewBonus(fixed x, fixed y, BonusType type, struct{
    number box_duration,
    CannonType cannon,
    CannonFreq frequency,
    number weapon_duration,
    number number_of_shields,
    fixed speed_factor,
    fixed speed_offset,
    number speed_duration,
    fn()
}) -> entity
```
Creates a new Bonus at the location `x`,`y` of the type `type`, and returns its entityId. For shield bonuses, the option `number_of_shields` determines how many shields are given out. For weapon bonuses, the options `cannon`, `frequency`, `weapon_duration` have the same meaning as in `pewpew.configure_player_ship_weapon`. For speed bonuses, the options `speed_factor`, `speed_offset`,and `speed_duration` have the same meaning as in `set_player_speed`. `taken_callback` is called when the bonus is taken, and is mandatory for the reinstantiation bonus. The callback receives as arguments the entity id of the bonus, the player id, and the ship's entity id. The default box duration is 400 ticks.


### `NewCrowder`

```rs
NewCrowder(fixed x, fixed y) -> entity
```
Creates a new Crowder at the location `x`,`y`, and returns its entityId.


### `NewFloatingMessage`

```rs
NewFloatingMessage(fixed x, fixed y, text str, struct{
    fixed scale,
    fixed dz,
    number ticks_before_fade,
    bool is_optional
}) -> entity
```
Creates a new floating message at the location `x`,`y`, with `str` as the message. The scale is a number that determines how large the  message will be. `1` is the default scale. `ticks_before_fade` determines how many ticks occur before the message starts to fade out. `is_optional` can be used to tell the game if the message can be hidden depending on the user's UI settings.If not specified, `scale` is 1, `ticks_before_fade` is 30 and `is_optional` is `false`. Returns the floating message's entityId.


### `NewEntity`

```rs
NewEntity(fixed x, fixed y) -> entity
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
NewMothership(fixed x, fixed y, MothershipType type, fixed angle) -> entity
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
NewPlasmaField(entity ship_a_id, entity ship_b_id, struct{
    fixed length,
    fixed stiffness
}) -> entity
```
Creates a new plasma field between `ship_a` and `ship_b`, and returns its entityId. If `ship_a` or `ship_b` is destroyed, the plasma field is destroyed as well. `length` is optional, and specifies the length of the plasma field (defaut is 150). `stiffness` is optional, and specifies the stiffness of the plasma field (default is 1)


### `NewShip`

```rs
NewShip(fixed x, fixed y, number player_index) -> entity
```
Creates a new Player Ship at the location `x`,`y` for the player identified by `player_index`, and returns its entityId.


### `NewPlayerBullet`

```rs
NewPlayerBullet(fixed x, fixed y, fixed angle, number player_index) -> entity
```
Creates a new bullet at the location `x`,`y` with the angle `angle` belonging to the player at the index `player_index`. Returns the entityId of the bullet.


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
NewSuperMothership(fixed x, fixed y, MothershipType type, fixed angle) -> entity
```
Creates a new Super Mothership at the location `x`,`y`, and returns its entityId.


### `NewWary`

```rs
NewWary(fixed x, fixed y) -> entity
```
Creates a new Wary at the location `x`,`y`.


### `NewUFO`

```rs
NewUFO(fixed x, fixed y, fixed dx) -> entity
```
Creates a new UFO at the location `x`,`y` moving horizontally at the speed of `dx`, and returns its entityId.


### `NewWeaponZone`

```rs
NewWeaponZone(fixed x, fixed y, CannonType cannon, CannonFreq frequency, struct{
    fixed radius,
    number number_of_sides
}) -> entity
```
Creates a new Weapon Zone at the location `x`,`y` with the respective weapon configuration, and another optional configuration table, that has the following keys:- `number_of_sides` - number of sides for the zone (default 12), right now *only* supports a value of 6.- `radius` - the radius in fx of the weapon zone (default 80fx).Default behavior of leaving a Weapon Zone is to *reset* the weapon configuration of each ship to **no** weapon!


### `SetRollingCubeWallCollision`

```rs
SetRollingCubeWallCollision(entity entity_id, bool collide_with_walls)
```
Sets whether the rolling cube identified with `id` collides with walls. By default it does not.


### `SetUFOWallCollision`

```rs
SetUFOWallCollision(entity entity_id, bool collide_with_walls)
```
Sets whether the ufo identified with `id` collides with walls. By default it does not.


### `GetEntityPosition`

```rs
GetEntityPosition(entity entity_id) -> (fixed, fixed)
```
Returns the position of the entity identified by `id`.


### `IsEntityAlive`

```rs
IsEntityAlive(entity entity_id) -> bool
```
Returns whether the entity identified by `id` is alive or not.


### `IsEntityBeingDestroyed`

```rs
IsEntityBeingDestroyed(entity entity_id) -> bool
```
Returns whether the entity identified by `id` is in the process of being destroyed. Returns false if the entity does not exist.


### `SetEntityPosition`

```rs
SetEntityPosition(entity entity_id, fixed x, fixed y)
```
Sets the position of the entity identified by `id` to `x`,`y`


### `EntityMove`

```rs
EntityMove(entity entity_id, fixed dx, fixed dy)
```
Attempts to move the entity identified by `id` by `dx`,`dy`. Movement will be blocked by walls.


### `SetEntityRadius`

```rs
SetEntityRadius(entity entity_id, fixed radius)
```
Sets the radius of the entity identified by `id`. To give you a sense of scale, motherships have a radius of 28fx.


### `SetEntityUpdateCallback`

```rs
SetEntityUpdateCallback(entity entity_id, fn(entity entity))
```
Sets a callback that will be called at every tick as long as the entity identified by `id` is alive. Remove the callback by passing a nil `callback`. The callbacks gets called with the entity ID.


### `DestroyEntity`

```rs
DestroyEntity(entity entity_id)
```
Makes the entity identified by `id` immediately disappear forever.


### `EntityReactToWeapon`

```rs
EntityReactToWeapon(entity entity_id, struct{
    WeaponType type,
    fixed x,
    fixed y,
    number player_index
}) -> bool
```
Makes the entity identified by `id` react to the weapon described in `weapon_description`. Returns whether the entity reacted to the weapon. The returned value is typically used to decide whether the weapon should continue to exist or not. In the case of an explosion, `x` and `y` should store the origin of the explosion. In the case of a bullet, `x` and `y` should store the vector of the bullet. The player identified by `player_index` will be assigned points. If `player_index` is invalid, no player will be assigned points.


### `EntityAddMace`

```rs
EntityAddMace(entity target_id, struct{
    fixed distance,
    fixed angle,
    fixed rotation_speed,
    MaceType type
}) -> entity
```
Adds a mace to the entity identified with `entity_id`. If `rotation_speed` exists, the mace will have a natural rotation, otherwise it will move due to inertia.


### `SetEntityPositionInterpolation`

```rs
SetEntityPositionInterpolation(entity entity_id, bool enable)
```
Sets whether the position of the mesh wil be interpolated when rendering. In general, this should be set to true if the entity will be moving.


### `SetEntityAngleInterpolation`

```rs
SetEntityAngleInterpolation(entity entity_id, bool enable)
```
Sets whether the angle of the mesh wil be interpolated when rendering. Angle interpolation is enabled by default.


### `SetEntityMesh`

```rs
SetEntityMesh(entity entity_id, MeshEnvironment file_path, number index)
```
Sets the mesh of the customizable entity identified by `id` to the mesh described in the file `file_path` at the index `index`. `index` starts at 0. If `file_path` is an empty string, the mesh is removed.


### `SetEntityFlippingMeshes`

```rs
SetEntityFlippingMeshes(entity entity_id, MeshEnvironment file_path, number index_0, number index_1)
```
Similar to `customizable_entity_set_mesh`, but sets two meshes that will be used in alternation. By specifying 2 separate meshes, 60 fps animations can be achieved.


### `SetEntityMeshColor`

```rs
SetEntityMeshColor(entity entity_id, number color)
```
Sets the color multiplier for the mesh of the customizable entity identified by `id`.


### `SetEntityString`

```rs
SetEntityString(entity entity_id, text text)
```
Sets the string to be displayed as part of the mesh of the customizable entity identified by `id`.


### `SetEntityMeshPosition`

```rs
SetEntityMeshPosition(entity entity_id, fixed x, fixed y, fixed z)
```
Sets the position of the mesh to x,y,z, relative to the center of the customizable entity identified by `id`


### `SetEntityMeshZ`

```rs
SetEntityMeshZ(entity entity_id, fixed z)
```
Sets the height of the mesh of the customizable entity identified by `id`. A `z` greater to 0 makes the mesh be closer, while a `z` less than 0 makes the mesh be further away.


### `SetEntityMeshScale`

```rs
SetEntityMeshScale(entity entity_id, fixed scale)
```
Sets the scale of the mesh of the customizable entity identified by `id`. A `scale` less than 1 makes the mesh appear smaller, while a `scale` greater than 1 makes the mesh appear larger.


### `SetEntityMeshXYZScale`

```rs
SetEntityMeshXYZScale(entity entity_id, fixed x_scale, fixed y_scale, fixed z_scale)
```
Sets the scale of the mesh of the customizable entity identified by `id` along the x,y,z axis. A `scale` less than 1 makes the mesh appear smaller, while a `scale` greater than 1 makes the mesh appear larger.


### `SetEntityMeshAngle`

```rs
SetEntityMeshAngle(entity entity_id, fixed angle, fixed x_axis, fixed y_axis, fixed z_axis)
```
Sets the rotation angle of the mesh of the customizable entity identified by `id`. The rotation is applied along the axis defined by `x_axis`,`y_axis`,`z_axis`.


### `SkipEntityMeshAttributesInterpolation`

```rs
SkipEntityMeshAttributesInterpolation(entity entity_id)
```
Skips the interpolation of the mesh's attributes (x, y, z, scale_x, scale_y, scale_z, rotation) for one tick. Only applies to the attributes that were set before the call to `customizable_entity_skip_mesh_attributes_interpolation`


### `SetEntityMusicResponse`

```rs
SetEntityMusicResponse(entity entity_id, struct{
    number color_start,
    number color_end,
    fixed scale_x_start,
    fixed scale_x_end,
    fixed scale_y_start,
    fixed scale_y_end,
    fixed scale_z_start,
    fixed scale_z_end
})
```
Configures the way the entity is going to respond to the music.


### `AddRotationToEntityMesh`

```rs
AddRotationToEntityMesh(entity entity_id, fixed angle, fixed x_axis, fixed y_axis, fixed z_axis)
```
Adds a rotation to the mesh of the customizable entity identified by `id`. The rotation is applied along the axis defined by `x_axis`,`y_axis`,`z_axis`.


### `SetEntityVisibilityRadius`

```rs
SetEntityVisibilityRadius(entity entity_id, fixed radius)
```
Sets the radius defining the visibility of the entity. This allows the game to know when an entity is actually visible, which in turns allows to massively optimize the rendering. Use the smallest value possible. If not set, the rendering radius is an unspecified large number that effectively makes the entity always be rendered, even if not visible.


### `SetEntityWallCollision`

```rs
SetEntityWallCollision(entity entity_id, bool collide_with_walls, fn(entity entity, number x, number y))
```
`collide_with_walls` configures whether the entity should stop when colliding with walls. If `collision_callback` is not nil, it is called anytime a collision is detected. The callback gets called with the entity id of the entity with the callback, and with the normal to the wall.


### `SetEntityPlayerCollision`

```rs
SetEntityPlayerCollision(entity entity_id, fn(entity entity, number x, entity other))
```
Sets the callback for when the customizable entity identified by `id` collides with a player's ship. The callback gets called with the entity id of the entity with the callback, and the player_index and ship_id that were involved in the collision. Don't forget to set a radius on the customizable entity, otherwise no collisions will be detected.


### `SetEntityWeaponCollision`

```rs
SetEntityWeaponCollision(entity entity_id, fn(entity entity, number x, WeaponType weapon) -> bool)
```
Sets the callback for when the customizable entity identified by `id` collides with a player's weapon. The callback gets called with the entity_id of the entity on which the callback is set, the player_index of the player that triggered the weapon, and the type of the weapon. The callback *must* return a boolean saying whether the entity reacts to the weapon. In the case of a bullet, this boolean determines whether the bullet should be destroyed.


### `SpawnEntity`

```rs
SpawnEntity(entity entity_id, number spawning_duration)
```
Makes the customizable entity identified by `id` spawn for a duration of `spawning_duration` game ticks.


### `ExplodeEntity`

```rs
ExplodeEntity(entity entity_id, number explosion_duration)
```
Makes the customizable entity identified by `id` explode for a duration of `explosion_duration` game ticks. After the explosion, the entity is destroyed. `explosion_duration` must be less than 255. Any scale applied to the entity is also applied to the explosion.


### `SetEntityTag`

```rs
SetEntityTag(entity entity_id, number tag)
```
Sets a tag on customizable entities. The tag can be read back with `customizable_entity_get_tag`.


### `GetEntityTag`

```rs
GetEntityTag(entity entity_id) -> number
```
Returns the tag that was set, or 0 if no tag was set.

