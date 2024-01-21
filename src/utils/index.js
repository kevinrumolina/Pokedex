const pokemonImage = (sprites) => {
    if(sprites.front_default) {
        return sprites.front_default;
    } else if (sprites.front_female) {
        return sprites.front_female;
    } else if (sprites.back_default) {
        return sprites.back_default;
    } else if (sprites.back_female) {
        return sprites.back_female;
    } else if (sprites.front_shiny) {
        return sprites.front_shiny;
    } else if (sprites.front_shiny_female) {
        return sprites.front_shiny_female;
    } else if (sprites.back_shiny) {
        return sprites.back_shiny;
    } else if (sprites.back_shiny_female) {
        return sprites.back_shiny_female;
    } 
}

export {
    pokemonImage
};