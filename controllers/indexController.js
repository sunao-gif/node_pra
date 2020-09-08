//他のところから読み込んだ時にここが出力されるよ
const db = require('../models/index');

module.exports = {
    index:(req,res)=>{
        res.send('Hello, World!');
    },
    create: (req,res)=>{
        db.User.create({
            name: 'sunao',
            email: 'example@example.com',
            password: '123456',
        }).then(()=>{
            res.send('Data created');
        }).catch((e)=>{
            res.send('error' + e);
        });
    },
    get:(req,res)=>{
        db.User.findAll({
            where: {
                name: 'sunao'
            }
        }).then((data)=>{
            res.send(data);
        }
        ).catch((e)=>{
            res.send('error' + e)
        });
    },
    delete: (req,res)=>{
        db.User.destroy({
            where: {
                name: 'sunao'
            }
        }).then(()=>{
            res.send('destroyed');
        }).catch((e)=>{
            res.send('error')
        });
    },
};
