const db = require('../data/db-config.js')

module.exports = {
    add,
    find,
    findById,
    edit,
    remove,
    updateRecord    
}

function add(stat) {
    console.log(db('stats'))
    return db('stats')    
    .insert(stat, 'id')
    .then(ids => {
        const [id] = ids        
    })
}

function find() {
    return db('stats').select('*')
}

function findById(id){
    return db('stats').where("id", id).first()
}

function edit(id, change){
    return db('stats').where({id}).update(change)
}

function remove(id){
    return db('stats').where("id", id).del()
}

async function updateRecord(player_id, new_data){
    const user_stats = await findById(player_id)    
    const updatedPa = user_stats.PA += new_data.PA
    const updatedAb = user_stats.AB += new_data.AB
    const updatedBb = user_stats.BB += new_data.BB
    const updatedK = user_stats.K += new_data.K
    const updatedKl = user_stats.KL += new_data.KL
    const updatedHits = user_stats.Hits += new_data.Hits
    const updatedDoubles = user_stats.Double += new_data.Double
    const updatedTriples = user_stats.Triple += new_data.Triple
    const updatedHr = user_stats.HR += new_data.HR
    const updatedRbi = user_stats.RBI += new_data.RBI
    const updatedR = user_stats.R += new_data.R
    const updatedSb = user_stats.SB += new_data.SB
    const updatedBa = user_stats.Hits /= user_stats.AB
    const updatedbio = new_data.bio
    
    await edit(player_id, {
        ...user_stats,
        PA: updatedPa,
        AB: updatedAb,
        BB: updatedBb,
        K: updatedK,
        KL: updatedKl,
        Hits: updatedHits,
        Double: updatedDoubles,
        Triple: updatedTriples,
        HR: updatedHr,
        RBI: updatedRbi,
        R: updatedR,
        SB: updatedSb,
        bio: updatedbio        
    })
    return user_stats    
}

