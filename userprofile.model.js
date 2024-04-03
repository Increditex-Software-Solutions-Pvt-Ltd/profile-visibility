const {sequelize} = require('../index');
const {DataTypes} = require('sequelize');
const { Userphoto } = require('./userphotos.model');

const Userprofile = sequelize.define('userprofile',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    userphoto:{
       type:DataTypes.INTEGER,
       references:{
        model:Userphoto,
        key:'id'
       },
       allowNull:true
    },
    profilefor:{
        type:DataTypes.STRING,
        allowNull:true
    },
    fullname:{
        type:DataTypes.STRING,
        allowNull:true
    },
    birthname:{
        type:DataTypes.STRING,
        allowNull:true
    },
    city:{
        type:DataTypes.STRING,
        allowNull:true
    },
    dateofbirth:{
        type:DataTypes.DATE,
        allowNull:true
    },
    timeofbirth:{
        type:DataTypes.TIME,
        allowNull:true
    },
    education:{
        type:DataTypes.STRING,
        allowNull:true
    },
    income:{
        type:DataTypes.BIGINT,
        allowNull:true
    },
    bloodgroup:{
        type:DataTypes.STRING,
        allowNull:true
    },
    spectacles:{
        type:DataTypes.STRING,
        allowNull:true
    },
    birthplace:{
        type:DataTypes.STRING,
        allowNull:true
    },
    occupation:{
        type:DataTypes.STRING,
        allowNull:true
    },
    hudda:{
        type:DataTypes.STRING,
        allowNull:true
    },
    maritalstatus:{
        type:DataTypes.STRING,
        allowNull:true
    },
    height:{
        type:DataTypes.BIGINT,
        allowNull:true
    },
    occupationcity:{
        type:DataTypes.STRING,
        allowNull:true
    },
    complexion:{
        type:DataTypes.STRING,
        allowNull:true
    },
    address:{
        type:DataTypes.TEXT,
        allowNull:true
    },
    disabled:{
        type:DataTypes.STRING,
        allowNull:true
    },
    fathername:{
        type:DataTypes.STRING,
        allowNull:true
    },
    mothername:{
        type:DataTypes.STRING,
        allowNull:true
    },
    fatheroccupation:{
        type:DataTypes.STRING,
        allowNull:true
    },
    motheroccupation:{
        type:DataTypes.STRING,
        allowNull:true
    },
    maternaluncle:{
        type:DataTypes.STRING,
        allowNull:true
    },
    parentaddress:{
        type:DataTypes.TEXT,
        allowNull:true
    },
    profilevisibility:{
        type:DataTypes.STRING,
        allowNull:true
    },
    familymembers:{
        type:DataTypes.INTEGER,
        allowNull:true
    },
    // agedifference:{
    //     type:DataTypes.STRING,
    //     allowNull:true
    // },
    // preferredcity:{
    //     type:DataTypes.STRING,
    //     allowNull:true
    // },
    // expectedheight:{
    //     type:DataTypes.STRING,
    //     allowNull:true
    // },
    // herhiseducation:{
    //     type:DataTypes.STRING,
    //     allowNull:true
    // },
    expectation:{
        type:DataTypes.TEXT,
        allowNull:true
    },
    email:{
        type:DataTypes.STRING,
        allowNull:true
    },
    mobile:{
        type:DataTypes.STRING,
        allowNull:true
    },
    userId:{
        type:DataTypes.INTEGER,
        allowNull:true
    }
})

Userprofile.belongsTo(Userphoto,{foreignKey:'userphoto',targetKey:'id',as:'userImage'})
Userphoto.hasMany(Userprofile,{foreignKey:'userphoto',sourceKey:'id',as:'imageUser'})

module.exports = {Userprofile}
