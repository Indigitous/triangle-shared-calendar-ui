(function(){
  'use strict';

  angular.module('events')
         .service('eventService', ['$q', EventService]);

  /**
   * Events DataService
   * Events embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function EventService($q){
     var data = {
        "found": 8,
        "start": 0,
        "events": [{
            "companyName": "Hope Community Church",
            "companyCity": "Raleigh",
            "companyState": "North Carolina",
            "companyPostalCode": "27606",
            "companyCountry": "United States",
            "startTime": "2015-12-01T00:00:00Z",
            "endTime": "2015-12-01T01:30:00Z",
            "uid": "29712-1448928000-1448933400@www.gethope.net",
            "summary": "On the Journey to Authentic Manhood - A man and his design",
            "description": "Men, ever wondered how to live a life of truth, passion and purpose? Authentic Manhood is a gospel-centered study designed to encourage you as you pursue God’s promises. This six-week class is the first in a series of five classes centered on helping men be godly in every area of life. Titled “33 The Series” after Jesus’ 33 years on Earth, this multi-volume, gospel-centered video series presents the timeless truths of Authentic Manhood in a powerfully new and engaging way, including inspiring testimonies, expert interviews and multiple creative features.  Each session will begin with a time of large group teaching followed by small group discussion.  Monday nights Sept. 28-Dec. 7, 7-8:30 p.m. in The Loft.  Cost is $20.  Questions?  [button id=\"\" style=\"filled-small\" class=\"\" align=\"\" link=\"https://hopecommunitychurch.wufoo.com/forms/r1xw3qbi1l3ay9y/\" linkTarget=\"_blank\" bgColor=\"accent1\" hover_color=\"accent1\" font=\"24\" icon=\"arrow-right4\" icon_placement=\"left\" icon_color=\"\"]Register here[/button]",
            "allDayEvent": false
        }, {
            "companyName": "Hope Community Church",
            "companyCity": "Raleigh",
            "companyState": "North Carolina",
            "companyPostalCode": "27606",
            "companyCountry": "United States",
            "startTime": "2015-12-01T23:30:00Z",
            "endTime": "2015-12-02T01:00:00Z",
            "uid": "23674-1449012600-1449018000@www.gethope.net",
            "summary": "Military/Family Support Group",
            "description": "This group offers encouragement and support to the active duty, guard, reserve, retired, veterans, and family members. Gatherings are held the first Tuesday of each month at the Raleigh campus.  Questions? Contact the organizer.",
            "allDayEvent": false
        }, {
            "companyName": "Hope Community Church",
            "companyCity": "Raleigh",
            "companyState": "North Carolina",
            "companyPostalCode": "27606",
            "companyCountry": "United States",
            "startTime": "2015-12-02T14:30:00Z",
            "endTime": "2015-12-02T16:00:00Z",
            "uid": "29353-1449066600-1449072000@www.gethope.net",
            "summary": "Mom's Coffee Break",
            "description": "We realize it’s hard to meet other moms with life’s many demands. At Mom’s Coffee Break, you will be encouraged, inspired and have the opportunity to connect with other women. Don't miss this opportunity, and be sure to invite your neighbor, friend or walking buddy! We’ll have a special interest speaker for each month with discussion time around tables led by mentor moms. This is a great opportunity to meet other moms in the Triangle. 9:30-11 a.m. at the Raleigh campus the first Wednesday of every month. Need childcare? Please pre-register a week before the event. Valet parking is also provided free of charge by Hope staff!",
            "allDayEvent": false
        }, {
            "companyName": "Hope Community Church",
            "companyCity": "Raleigh",
            "companyState": "North Carolina",
            "companyPostalCode": "27606",
            "companyCountry": "United States",
            "startTime": "2015-12-03T00:00:00Z",
            "endTime": "2015-12-03T02:00:00Z",
            "uid": "29248-1449100800-1449108000@www.gethope.net",
            "summary": "HSM: Pulse",
            "description": "High school students — bored at church? Need something just for you? Pulse is the answer.  Meeting the first Wednesday of every month, at Pulse you’re a part of something awesome. Here, you’ll be challenged, encouraged and equipped in an environment created just for you. All while making new friends and having fun. Sound good? Join us!  Doors open at 6:30 p.m. Pulse starts at 7 p.m.  [button id=\"\" style=\"filled-small\" class=\"\" align=\"\" link=\"http://students.gethope.net/hsm/what-is-pulse/\" linkTarget=\"_blank\" bgColor=\"accent1\" hover_color=\"accent1\" font=\"24\" icon=\"arrow-right4\" icon_placement=\"left\" icon_color=\"\"]Shuttle times and locations[/button]",
            "allDayEvent": false
        }, {
            "companyName": "Hope Community Church",
            "companyCity": "Raleigh",
            "companyState": "North Carolina",
            "companyPostalCode": "27606",
            "companyCountry": "United States",
            "startTime": "2015-12-03T23:30:00Z",
            "endTime": "2015-12-04T01:00:00Z",
            "uid": "28820-1449185400-1449190800@www.gethope.net",
            "summary": "DivorceCare",
            "description": "This 13-week class that runs from Sept. 3 - Dec. 3 provides a friendly, caring group of people who will walk alongside you through one of life’s most difficult experiences.  [button id=\"\" style=\"filled-small\" class=\"\" align=\"\" link=\"https://hopecommunitychurch.wufoo.com/forms/rvnabcn1gqgqc0/\" linkTarget=\"_blank\" bgColor=\"accent1\" hover_color=\"accent1\" font=\"24\" icon=\"arrow-right4\" icon_placement=\"left\" icon_color=\"\"]Register here[/button]",
            "allDayEvent": false
        }, {
            "companyName": "Hope Community Church",
            "companyCity": "Raleigh",
            "companyState": "North Carolina",
            "companyPostalCode": "27606",
            "companyCountry": "United States",
            "startTime": "2015-12-03T23:30:00Z",
            "endTime": "2015-12-04T01:00:00Z",
            "uid": "28836-1449185400-1449190800@www.gethope.net",
            "summary": "DivorceCare 4 Kids",
            "description": "This 13-week class, Sept. 3- Dec. 3, provides a safe and caring environment for children of divorce to experience hope, help and restoration.  [button id=\"\" style=\"filled-small\" class=\"\" align=\"\" link=\"https://hopecommunitychurch.wufoo.com/forms/rvnabcn1gqgqc0/\" linkTarget=\"_blank\" bgColor=\"accent1\" hover_color=\"accent1\" font=\"24\" icon=\"arrow-right4\" icon_placement=\"left\" icon_color=\"\"]Register here[/button]",
            "allDayEvent": false
        }, {
            "companyName": "Hope Community Church",
            "companyCity": "Raleigh",
            "companyState": "North Carolina",
            "companyPostalCode": "27606",
            "companyCountry": "United States",
            "startTime": "2015-12-05T05:00:00Z",
            "endTime": "2015-12-06T05:00:00Z",
            "uid": "30426-1449291600-1449377999@www.gethope.net",
            "summary": "Communion",
            "description": "Join us for communion immediately after each service this weekend.  \"For whenever you eat this bread and drink this cup, you proclaim the Lord's death until he comes.\" 1 Corinthians 11:26",
            "allDayEvent": true
        }, {
            "companyName": "Hope Community Church",
            "companyCity": "Raleigh",
            "companyState": "North Carolina",
            "companyPostalCode": "27606",
            "companyCountry": "United States",
            "startTime": "2015-12-05T22:15:00Z",
            "endTime": "2015-12-06T00:30:00Z",
            "uid": "25912-1449353700-1449361800@www.gethope.net",
            "summary": "Communion",
            "description": "Join us for communion immediately after each service this weekend.  \"For whenever you eat this bread and drink this cup, you proclaim the Lord's death until he comes.\" 1 Corinthians 11:26",
            "allDayEvent": false
        }]
    };
    var events = [
      {
        name: 'Lia Lugo is a silly person with a crazy long last name',
        avatar: 'svg-1',
        content: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.'
      },
      {
        name: 'George Duke',
        avatar: 'svg-2',
        content: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.'
      },
      {
        name: 'Gener Delosreyes',
        avatar: 'svg-3',
        content: "Raw denim pour-over readymade Etsy Pitchfork. Four dollar toast pickled locavore bitters McSweeney's blog. Try-hard art party Shoreditch selfies. Odd Future butcher VHS, disrupt pop-up Thundercats chillwave vinyl jean shorts taxidermy master cleanse letterpress Wes Anderson mustache Helvetica. Schlitz bicycle rights chillwave irony lumberhungry Kickstarter next level sriracha typewriter Intelligentsia, migas kogi heirloom tousled. Disrupt 3 wolf moon lomo four loko. Pug mlkshk fanny pack literally hoodie bespoke, put a bird on it Marfa messenger bag kogi VHS."
      },
      {
        name: 'Lawrence Ray',
        avatar: 'svg-4',
        content: 'Scratch the furniture spit up on light gray carpet instead of adjacent linoleum so eat a plant, kill a hand pelt around the house and up and down stairs chasing phantoms run in circles, or claw drapes. Always hungry pelt around the house and up and down stairs chasing phantoms.'
      },
      {
        name: 'Ernesto Urbina',
        avatar: 'svg-5',
        content: 'Webtwo ipsum dolor sit amet, eskobo chumby doostang bebo. Bubbli greplin stypi prezi mzinga heroku wakoopa, shopify airbnb dogster dopplr gooru jumo, reddit plickers edmodo stypi zillow etsy.'
      },
      {
        name: 'Gani Ferrer',
        avatar: 'svg-6',
        content: "Lebowski ipsum yeah? What do you think happens when you get rad? You turn in your library card? Get a new driver's license? Stop being awesome? Dolor sit amet, consectetur adipiscing elit praesent ac magna justo pellentesque ac lectus. You don't go out and make a living dressed like that in the middle of a weekday. Quis elit blandit fringilla a ut turpis praesent felis ligula, malesuada suscipit malesuada."
      }
    ];

    // Promise-based API
    return {
      loadAllEvents : function() {
        // Simulate async nature of real remote calls
        return $q.when(data.events);
      }
    };
  }

})();
