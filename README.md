# The Tower Idle Game: Calculator

This tool offers a calculator for damage optimisation for the upgrades of the game "The Tower Idle Game".

## Usage
### Setup lab and workshop
Go to the Lab And Start Setup tab, and configure the level of your lab researches and current workshop upgrades

These values are saved locally on the website's LocalStorage, no data is ever sent to any server.

### Attack Upgrades
When this is done, jump into the Attack Upgrades tab.

There, you can see, in order, which Upgrade will give you the most damage input per $ spent.

Hovering the upgrade will display the current state of the upgrade you should have at this point in the attack tab in the game.

## Known issues

### Damage calculation
Since I couldn't find an up-to-date list of values for the damage levels as of Sep 2025, damage calculation is approximative.

It uses this formula, that more or less matches the damage values for the first 400 levels at least, which is enough for the moment:

```
4.73 + 4.2 * level + 0.115 * level * level
```

### Workshop damage update
In the setup screen, the workshop value uses the lab boost for the displayed value, to match what you can see in game.

However, the value is not updated when the lab level changes, you need to update it manually by changing the corresponding level of the workshop upgrade.

This most likely won't be fixed because: the value is purely informative, and not used for calculation in the tool ; it only matters for 3 values in the attack upgrades ; it can easily be updated manually.