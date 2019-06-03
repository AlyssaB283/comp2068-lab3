var express = require('express');
var router = express.Router();

/* GET home page. */
/*git remote add origin https://github.com/AlyssaB283/comp2068-lab3.git
git push -u origin master */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to our house' });
});

const theFam = 
[
  {
    route: 'alyssa',
    name: 'Alyssa Brown',
    age: '19',
    cityBorn: 'Toronto',
    cityRes: 'Barrie',
    hobby: 'listen to music',
    job: 'working as a waiter'
  },
  {
    route: 'trea',
    name: 'Trea Kelly',
    age: '22',
    cityBorn: 'Toronto',
    cityRes: 'Barrie',
    hobby: 'make mix tapes',
    job: 'I dont even know man'
  },
  {
    route: 'ty',
    name: 'Ty Armstrong',
    age: '15',
    cityBorn: 'Barrie',
    cityRes: 'Barrie',
    hobby: 'play Fortnite with the squad',
    job: 'being a student'
  },
  {
    route: 'jenine',
    name: 'Jenine Clarke',
    age: 'if you knew, I would have to kill you',
    cityBorn: 'Clarendon',
    cityRes: 'Barrie',
    hobby: 'watch my soaps',
    job: 'runing my own restaurant'
  },
  {
    route: 'shaunn',
    name: 'Shaunn Armstrong',
    age: '48',
    cityBorn: 'Kingston',
    cityRes: 'Barrie',
    hobby: 'play WOW with the boys',
    job: 'driving the TTC bus'
  },
  {
    route: 'zuri',
    name: 'Zuri Brown',
    age: '2',
    cityBorn: 'Fort Lauderdale',
    cityRes: 'Fort Lauderdale',
    hobby: 'to take someone elses phone and break it',
    job: 'being the cutest baby in the world'
  },
  {
    route: 'kamari',
    name: 'Kamari Brown',
    age: '8',
    cityBorn: 'Portmore',
    cityRes: 'Fort Lauderdale',
    hobby: 'play with my sisters',
    job: 'being a kid'
  },
  {
    route: 'chantelle',
    name: 'Chantelle Lee',
    age: '24',
    cityBorn: 'Mississauga',
    cityRes: 'Barrie',
    hobby: 'spill tea',
    job: 'working at Walmart'
  },
];

router.get('/:route', (req, res, next) => 
{
  const member = theFam.find(per => per.route === req.params.route);

  // if no famliy member send a error
  if (!member) return next(new Error('Cannot find person'));

  return res.render('person', member);
});


module.exports = router;
