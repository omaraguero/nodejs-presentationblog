import { Router } from "express"
const router = Router()

function myAge(birthDay){
    var todayDate = new Date();
    var differenceMS = todayDate - birthDay;
    var yearsOld = Math.floor(differenceMS / 1000 / 60 / 60 / 24 / 365.25)
    return yearsOld;
}

router.get('/', (req, res)=> res.render('index', {title : 'A website made with Node.js' , x: "Node.js"}))

var age = myAge(new Date('2000-09-07'))

router.get('/about', (req, res)=> res.render('about' , { title : 'About Me', x: age}))

router.get('/contact', (req, res)=> res.render('contact' ,  {title : 'Contact'}))

export default router