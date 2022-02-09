const db = require('../data/db-config');

async function createMessage(message) {
    const [newMessage] = await db('messages').insert(message,
        ['message_id',  'organizer_id', 'attendee_id', 
        'attendee_username','messages.type', 'potluck_id'] )
    return newMessage 
  }
  
  async function findBy(filter) {
    const filterKey = Object.keys(filter);
    const filterValue = Object.values(filter)

    if(filterKey[0]===undefined){
      const messages = await db("messages")
      .join('potlucks', 'messages.potluck_id', '=', 'potlucks.potluck_id')
      .select('messages.message_id','potlucks.potluck_id','messages.organizer_id','potlucks.username',  'messages.attendee_id',
         'messages.attendee_username','messages.type', 'potlucks.event_name', 'potlucks.description','potlucks.event_date', 
         'potlucks.event_time', 'potlucks.location')
         return messages
    }else {
      const messages = await db("messages")
      .join('potlucks', 'messages.potluck_id', '=', 'potlucks.potluck_id')
      .select('messages.message_id','potlucks.potluck_id','messages.organizer_id', 'potlucks.username','messages.attendee_id',
      'messages.attendee_username', 'messages.type', 'potlucks.event_name', 'potlucks.description','potlucks.event_date', 
         'potlucks.event_time', 'potlucks.location')
      .where(`messages.${filterKey[0]}`, filterValue[0])
        return messages;
    }
  }

  function deleteBy(filter) {
    return db('messages').where(filter).del()
  }

module.exports = {
    createMessage,
    findBy,
    deleteBy
}