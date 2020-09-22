let messages = [];
let id = 0;

module.exports = {
    create: (req,res) => {
        //console.log(req.body);
        const {text,time} = req.body;
        newMessage ={
            id: id,
            text: req.body.text,
            time: req.body.time
        }
        messages.push(newMessage);
        id++;
        res.status(200).send(messages);
    },
    read: (req,res) => {
        res.status(200).send(messages);
    },
    update: (req,res) => {
        console.log(req.body);
        console.log(req.params);
        //const{text} = req.body;
        let message = messages.find(el => el.id === +req.params.id)
        message.text = req.body.text;
        //message.time = req.body.time;

        res.status(200).send(messages);
    },
    delete: (req,res) => {
        let index = messages.findIndex(el => el.id === +req.params.id)
        messages.splice(index,1);

        res.status(200).send(messages);
    }
}