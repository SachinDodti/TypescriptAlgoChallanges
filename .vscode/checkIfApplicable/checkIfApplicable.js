
 function checkIfApplicable(userRoleArray, applicableArray) {
    if(userRoleArray == '')return 
    if (applicableArray && applicableArray.includes('*')) return true;
    // lowercase applicableArray
    let newApplicableArray = [];
    if (applicableArray && applicableArray.length > 0) {
      for (let i = 0; i < applicableArray.length; i += 1) {
        newApplicableArray.push(applicableArray[i].toLowerCase());
      }
    }

 


    // lowercase userRoleArray
    let newUserRoleArray =[];
    newUserRoleArray.push(userRoleArray[0]?.toLowerCase());
  console.log(userRoleArray[0].toLowerCase())
    if (newUserRoleArray && newUserRoleArray.length > 0) {
      for (let i = 0; newUserRoleArray.length ; i +=1){
        if (newApplicableArray.includes(newUserRoleArray[i])){
          return true;
        }
      }
    }

    return false;
  }


  const userRoleArray = ['front line sale'];

  const applicableArray =['*']

//   const applicableArray = [
//     "FLS",
//     "FRONT LINE SALE",
//     "NON SALES",
//     "Employee-Sales Management",
//     "Employee-Front-Line Sales",
//     "Employee-Sales Support",
//     "Employee-Non Sales",
//     "SALES MANAGEMENT",
//     "SALES SUPPORT"
//   ];

  console.log(checkIfApplicable(userRoleArray,applicableArray))