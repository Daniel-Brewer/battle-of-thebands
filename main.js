let bandNumber = 0

const takeNumber = function (bandName) {
    /*
        Write your awesome code here. See comments
        below for what should be returned.
    */
        bandNumber = bandNumber + 1;
        console.log(bandNumber + ". " + bandName)
}

takeNumber ("Castle Drive");
takeNumber ("The Nashville Players");
takeNumber("Galactic Scum")
takeNumber("Underdogs")
