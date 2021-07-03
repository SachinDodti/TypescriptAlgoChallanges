export const STORAGE_KEY = {
    DEVICE: {
      IMEI: 'rnlic.hrapp.device.imei',
      UID: 'rnlic.hrapp.device.uid',
      FCM_TOKEN: 'rnlic.hrapp.device.fcmToken',
    },
    CHECKINOUT: {
      LASTCHECKINDATE: 'rnlic.hrapp.checkInOut.lastCheckInDate',
      LASTCHECKOUTDATE: 'rnlic.hrapp.checkInOut.lastCheckOutDate',
      CHECKINTIME: 'rnlic.hrapp.checkInOut.checkInTime',
      CHECKOUTTIME: 'rnlic.hrapp.checkInOut.checkOutTime',
    },

    // MANDATORY_LEARNING: {
    //   ALL_MANDATORY_LEARNING_COMPLETED:
    //     'rnlic.hrapp.allMandatoryLearningCompleted',
    //   ALL_MANDATORY_DATA: 'rnlic.hrapp.allMandatoryLearningData',
    // },
    // USER: {
    //   LAST_LOGGED_IN: 'rnlic.hrapp.user.lastLoggedIn',
    //   MOBILE_NUMBER_VERIFIED: 'rnlic.hrapp.user.mobileVerified',
    //   VERIFIED_MOBILE_NUMBER: 'rnlic.hrapp.user.mobileNo',
    //   TOPICS_SUBSCRIBED: 'rnlic.hrapp.user.subscription',
    //   LOGGEDIN_USER: 'rnlic.hrapp.user.loggedin',
    //   AUTH_TOKEN: 'rnlic.hrapp.user.authToken',
    //   BIRTHDAY_WISHED: 'rnlic.hrapp.user.birthdayWishedArray',
    //   ANNIVERSARY_WISHED: 'rnlic.hrapp.user.anniversaryWishedArray',
    // },
    // CHECKINOUT: {
    //   LASTCHECKINDATE: 'rnlic.hrapp.checkInOut.lastCheckInDate',
    //   LASTCHECKOUTDATE: 'rnlic.hrapp.checkInOut.lastCheckOutDate',
    //   CHECKINTIME: 'rnlic.hrapp.checkInOut.checkInTime',
    //   CHECKOUTTIME: 'rnlic.hrapp.checkInOut.checkOutTime',
    // },
    // USER_PREFERENCE: {
    //   REMEMBER_ME: 'rnlic.hrapp.user.pref.remember',
    //   SAPCODE: 'rnlic.hrapp.user.pref.sapCode',
    //   PANNUMBER: 'rnlic.hrapp.user.pref.panNumber',
    //   IS_EMPLOYEE: 'rnlic.hrapp.user.pref.isEmployee',
    // },
    // NETWORK: {
    //   TYPE: 'rnlic.hrapp.network.type',
    //   CONNECTED: 'rnlic.hrapp.network.connected',
    // },
    // FORCED_NOTIFICATION: {
    //   //FN- FORCED NOTIFICATION
    //   ALL_MANDATORY_FN_COMPLETED:
    //     'rnlic.hrapp.allMandatoryForcedNotificationCompleted',
    //   ALL_MANDATORY_FN_DATA: 'rnlic.hrapp.allMandatoryForcedNotificationData',
    // },
  };
  const getPropertyArray = (jsonObject) => {  
    console.log('key_0',jsonObject) 
    let properties = [];
   
    const jsonKeys = Object.keys(jsonObject);

    console.log('key_1',jsonKeys) 
    jsonKeys.forEach((key) => {
      const propertyCheck = Object.prototype.hasOwnProperty.call(jsonObject, key);
      if (propertyCheck) {
        // check if the value is String
        const type = typeof jsonObject[key];

        switch (type.toLowerCase()) {
          case 'string':
            properties.push(jsonObject[key]);
            console.log('PROPERTIES 🧑 ', properties)
            break;
          case 'object':
            //properties = properties.concat(getPropertyArray(jsonObject[key]));


            let prop = getPropertyArray(jsonObject[key]);
            console.log('PRPERTIE 🇬🇺  ',prop, properties)
            properties  =  [...properties, ...prop];

           console.log('Allow',properties)
            break;
          default:
        }
      }
    });
  
    return properties;
  };

    function getAll() {
    const keys = getPropertyArray(STORAGE_KEY);
    console.log("FINAL",keys)
  }


  let arr1 = [];
  let arr2 = ['a','b','c'];

  arr2.push('d','e');

  //let other1 = arr1.push(arr2);
  
  //let other1 = arr1.concat(arr2)

  let other1 = [...arr1,...arr2]
  console.log(arr1);


  getAll()