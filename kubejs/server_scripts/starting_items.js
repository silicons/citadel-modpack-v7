// priority: 9002
const nbtdatathing = `{"akashictome:data": {tconstruct: {id: "tconstruct:encyclopedia", Count: 1b}, industrialforegoing: {id: "patchouli:guide_book", Count: 1b, tag: {"patchouli:book": "industrialforegoing:industrial_foregoing"}}, astralsorcery: {id: "astralsorcery:tome", Count: 1b}, pneumaticcraft: {id: "patchouli:guide_book", Count: 1b, tag: {"patchouli:book": "pneumaticcraft:book"}}, immersiveengineering: {id: "immersiveengineering:manual", Count: 1b}, psi: {id: "patchouli:guide_book", Count: 1b, tag: {"patchouli:book": "psi:encyclopaedia_psionica"}}, mana-and-artifice: {id: "mana-and-artifice:guide_book", Count: 1b}, apotheosis: {id: "patchouli:guide_book", Count: 1b, tag: {"patchouli:book": "apotheosis:apoth_chronicle"}}, eidolon: {id: "eidolon:codex", Count: 1b}, vampirism: {id: "vampirism:vampire_book", Count: 1b, tag: {}}, engineersdecor: {id: "patchouli:guide_book", Count: 1b, tag: {"patchouli:book": "engineersdecor:engineersdecor_manual"}}, modularrouters: {id: "patchouli:guide_book", Count: 1b, tag: {"patchouli:book": "modularrouters:book"}}, botania: {id: "botania:lexicon", Count: 1b}, mysticalworld: {id: "mysticalworld:encyclopedia", Count: 1b}, supplementaries: {id: "patchouli:guide_book", Count: 1b, tag: {"patchouli:book": "supplementaries:supplementaries_guide"}}, twilightforest: {id: "patchouli:guide_book", Count: 1b, tag: {"patchouli:book": "twilightforest:guide"}}, cookingforblockheads: {id: "cookingforblockheads:crafting_book", Count: 1b}, forestry: {id: "forestry:foresters_manual", Count: 1b}, cyclic: {id: "patchouli:guide_book", Count: 1b, tag: {"patchouli:book": "cyclic:cyclic_guide_book"}}}}`;

// Register commands
events.listen('command.registry', function (event) {
  event
    .create('givetome')
    .execute(function (sender, args) {
    	sender.tell('Test!')
    	sender.give(Item.of('akashictome:tome', nbtdatathing));
    })
    .add()
})

onEvent('player.logged_in', event => {
  if (!event.hasGameStage('starting_items')) {
    // Give the player a custom Akashic Tome with the manuals for several mods.
    event.player.give(Item.of('akashictome:tome', nbtdatathing));
    // Add the Game Stage, preventing them getting it again.
    event.addGameStage('starting_items');
  }
});