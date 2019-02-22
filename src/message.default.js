const Chance = require('chance')
const chance = new Chance();

module.exports = {
    "command_not_found": chance.pickone([ "ไม่รู้จัก{}เลยค่ะ", "{}คืออะไรคะ? ' ')? ", "ไม่มี{}นะคะ", "ดวก", "{}ไม่มีในความทรงจำของฉันเลยค่ะ", "ไม่พบคำสั่ง{} ค่ะ ลองพิมพ์ !help เพื่อดูคำสั่งที่ถูกต้องนะคะ"]),
    "item_not_found": chance.pickone([ "ไม่รู้จัก{}เลยค่ะ", "{}คืออะไรคะ? ' ')? ", "ไม่มี{}นะคะ", "กาก", "{}ไม่มีในความทรงจำของฉันเลยค่ะ", "ไม่พบไอเท็ม{} ค่ะ", "ไอ้นี่มันมีอยู่จริงๆเหรอคะ?"])
}