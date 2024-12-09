function sendSpaceship(name:string, captain:string) {
    const spaceship = {
        name,
        captain,
        speed: 20,
        inMission: true,
        crew: []
    }

    alert(`A nave ${spaceship.name} decolou sob os cuidados do capitão ${spaceship.captain}`)

    return spaceship
}

sendSpaceship("Death Star", "Darth Vaider")