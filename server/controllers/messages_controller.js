let messages = [];
let id = 0;

module.exports = {
    createMessage: (req, res) => {
        const {text, time} = req.body

        messages.push({id, text, time});
        id++;
        res.status(200).send(messages)
    },
    readMessage: (req, res) => {
        res.status(200).send(messages)
    },
    updateMessage: (req, res) => {
        const {text} = req.body
        const {id} = req.params

        let updateMessageIndex = messages.findIndex(e => e.id === +id);

        messages[updateMessageIndex] = {
            id: messages[updateMessageIndex].id,
            text: text || messages[updateMessageIndex].text,
            time: messages[updateMessageIndex].time
        }

        res.status(200).send(messages);
    },
    deleteMessage: (req, res) => {
        const {id} = req.params

        let messagesId = messages.findIndex(e => e.id === +id);
        messages.splice(messagesId, 1);

        res.status(200).send(messages);
    }
}