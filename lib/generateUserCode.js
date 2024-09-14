export function generateUserCode(prefix, fullName) {
    // Extract initials from full name
    const initials = fullName.split(' ').map(name => name[0]).join('').toUpperCase();
    
    // Get current time in milliseconds
    const now = new Date();
  
    // Generate unique code
    const timestampCode = `${now.getFullYear()}${(now.getMonth() + 1).toString().padStart(2, '0')}
    ${now.getDate().toString().padStart(2, '0')}${now.getHours().toString().padStart(2, '0')}
    ${now.getMinutes().toString().padStart(2, '0')}${now.getSeconds().toString().padStart(2, '0')}
    ${now.getMilliseconds().toString().padStart(3, '0')}`;
    
    const userCode = `${prefix}-${initials}-${timestampCode}`;
  
    return userCode;
  } 