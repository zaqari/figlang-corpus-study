/////////////////////////////////////////////////////////////////////////
/////////////////////// REDOING THE TEMPLATE ////////////////////////////
/////////////////////////////////////////////////////////////////////////

///////////////////////// Corpus Segments //////////////////////////////
var e = [{"FIG":"lit","directed":null,"speaker":"*FAT:","U":"Danny (!) come eat peas and corn (!)","index":0,"Stimuli":"*FAT: Danny (!) come eat peas and corn (!)"},{"FIG":"sarcasm","directed":"child-produced","speaker":"*CHI:","U":"oh, great","index":1,"Stimuli":"*CHI: oh, great"},{"FIG":"lit","directed":null,"speaker":"*FAT:","U":"You want to eat [your] peas (?)","index":2,"Stimuli":"*FAT: You want to eat [your] peas (?)"},{"FIG":"pretend play","directed":"child-produced","speaker":"*CHI:","U":"I superman . ","index":3,"Stimuli":"*CHI: I superman . "},{"FIG":"lit","directed":null,"speaker":"*FAT:","U":"Superman needs to eat his peas","index":4,"Stimuli":"*FAT: Superman needs to eat his peas"},{"FIG":"pretend play","directed":"child-produced","speaker":"*CHI:","U":"@zzzz @zzzz [=pretending to fly]\"\"\"@zzzz @zzzz [=pretending to fly]\"\"\"\"","index":5,"Stimuli":"*CHI: @zzzz @zzzz [=pretending to fly]\"\"\"@zzzz @zzzz [=pretending to fly]\"\"\"\""},{"FIG":"lit","directed":null,"speaker":"*FAT:","U":"Okay Clark , here comes the evil mr. peas","index":6,"Stimuli":"*FAT: Okay Clark , here comes the evil mr. peas"},{"FIG":"lit","directed":null,"speaker":"*CHI:","U":"No !","index":7,"Stimuli":"*CHI: No !"},{"FIG":"lit","directed":null,"speaker":"*CHI:","U":"Superman no eat peas !","index":8,"Stimuli":"*CHI: Superman no eat peas !"},{"FIG":"lit","directed":null,"speaker":"*CHI:","U":"Superman eat cake . ","index":9,"Stimuli":"*CHI: Superman eat cake . "},{"FIG":"lit","directed":null,"speaker":"*FAT:","U":"Superman needs to eat his peas first","index":10,"Stimuli":"*FAT: Superman needs to eat his peas first"},{"FIG":"metaphor","directed":"child-produced","speaker":"*CHI:","U":"Peas froggy !","index":11,"Stimuli":"*CHI: Peas froggy !"},{"FIG":"lit","directed":null,"speaker":"*FAT:","U":"@uh @huh (?)\"\"\"@uh @huh (?)\"\"\"\"","index":12,"Stimuli":"*FAT: @uh @huh (?)\"\"\"@uh @huh (?)\"\"\"\""},{"FIG":"lit","directed":null,"speaker":"*CHI:","U":"Peas yucky !","index":13,"Stimuli":"*CHI: Peas yucky !"},{"FIG":"understatement","directed":"child-produced","speaker":"*CHI:","U":"and little slimy .","index":14,"Stimuli":"*CHI: and little slimy ."},{"FIG":"lit","directed":null,"speaker":"*FAT:","U":"Oh ?","index":15,"Stimuli":"*FAT: Oh ?"}];
var c1 = [{"index":183,"Stimuli":"*FAT: no. say he called me a twerp.","directed":null,"U":"no. say he called me a twerp.","FIG":"lit","speaker":"*FAT:"},{"index":184,"Stimuli":"*CHI: you're a twerp.","directed":null,"U":"you're a twerp.","FIG":"lit","speaker":"*CHI:"},{"index":185,"Stimuli":"*FAT: okay. Ross. say I called Daddy a twerp.","directed":null,"U":"okay. Ross. say I called Daddy a twerp.","FIG":"lit","speaker":"*FAT:"},{"index":186,"Stimuli":"*CHI: I called Daddy a twerp.","directed":null,"U":"I called Daddy a twerp.","FIG":"lit","speaker":"*CHI:"},{"index":187,"Stimuli":"*FAT: okay.","directed":null,"U":"okay.","FIG":"lit","speaker":"*FAT:"},{"index":188,"Stimuli":"*CHI: he's getting unhappy. and he doesn't likes to be unhappy.","directed":null,"U":"he's getting unhappy. and he doesn't likes to be unhappy.","FIG":"lit","speaker":"*CHI:"},{"index":189,"Stimuli":"*FAT: is his blanket dirty?","directed":null,"U":"is his blanket dirty?","FIG":"lit","speaker":"*FAT:"},{"index":190,"Stimuli":"*CHI: no. this Bobby is clean [= Bobby sleeper].","directed":null,"U":"no. this Bobby is clean [= Bobby sleeper].","FIG":"lit","speaker":"*CHI:"},{"index":191,"Stimuli":"*CHI: I did pee pee in my pants last year.","directed":"child-produced","U":"I did pee pee in my pants last year.","FIG":"fig","speaker":"*CHI:"},{"index":192,"Stimuli":"*FAT: what are you doing. Ross?","directed":null,"U":"what are you doing. Ross?","FIG":"lit","speaker":"*FAT:"},{"index":193,"Stimuli":"*CHI: I'm making a circle.","directed":null,"U":"I'm making a circle.","FIG":"lit","speaker":"*CHI:"},{"index":194,"Stimuli":"*FAT: wow.","directed":null,"U":"wow.","FIG":"lit","speaker":"*FAT:"},{"index":195,"Stimuli":"*CHI: I'm making a circle.","directed":null,"U":"I'm making a circle.","FIG":"lit","speaker":"*CHI:"},{"index":196,"Stimuli":"*FAT: you're making a circle?","directed":null,"U":"you're making a circle?","FIG":"lit","speaker":"*FAT:"},{"index":197,"Stimuli":"*CHI: yeah.","directed":null,"U":"yeah.","FIG":"lit","speaker":"*CHI:"},{"index":198,"Stimuli":"*FAT: why?","directed":null,"U":"why?","FIG":"lit","speaker":"*FAT:"},{"index":199,"Stimuli":"*CHI: because I want to. because that's nice.","directed":null,"U":"because I want to. because that's nice.","FIG":"lit","speaker":"*CHI:"},{"index":200,"Stimuli":"*CHI: I want that bottle.","directed":null,"U":"I want that bottle.","FIG":"lit","speaker":"*CHI:"},{"index":201,"Stimuli":"*CHI: I! want the bottle.","directed":null,"U":"I! want the bottle.","FIG":"lit","speaker":"*CHI:"},{"index":202,"Stimuli":"*CHI: can I have the bottle?","directed":null,"U":"can I have the bottle?","FIG":"lit","speaker":"*CHI:"}];
var c2 = [{"index":743,"Stimuli":"*FAT: and she helps him make the toys.","directed":"child-directed","U":"and she helps him make the toys.","FIG":"fig","speaker":"*FAT:"},{"index":744,"Stimuli":"*CHI: why?","directed":null,"U":"why?","FIG":"lit","speaker":"*CHI:"},{"index":745,"Stimuli":"*FAT: why?","directed":null,"U":"why?","FIG":"lit","speaker":"*FAT:"},{"index":746,"Stimuli":"*CHI: yeah.","directed":null,"U":"yeah.","FIG":"lit","speaker":"*CHI:"},{"index":747,"Stimuli":"*FAT: because he needs lots_of help and he has little elves that help him make toys too.","directed":"child-directed","U":"because he needs lots_of help and he has little elves that help him make toys too.","FIG":"fig","speaker":"*FAT:"},{"index":748,"Stimuli":"*CHI: why?","directed":null,"U":"why?","FIG":"lit","speaker":"*CHI:"},{"index":749,"Stimuli":"*MOT: well Mrs Santa Clause knits lots_of sweaters and mittens for kids.","directed":null,"U":"well Mrs Santa Clause knits lots_of sweaters and mittens for kids.","FIG":"lit","speaker":"*MOT:"},{"index":750,"Stimuli":"*CHI: when the snow comes I'm going to make big fire and get warm.","directed":null,"U":"when the snow comes I'm going to make big fire and get warm.","FIG":"lit","speaker":"*CHI:"},{"index":751,"Stimuli":"*FAT: what are the gloves for. Ross?","directed":null,"U":"what are the gloves for. Ross?","FIG":"lit","speaker":"*FAT:"},{"index":752,"Stimuli":"*CHI: for a warm time.","directed":null,"U":"for a warm time.","FIG":"lit","speaker":"*CHI:"},{"index":753,"Stimuli":"*FAT: for a warm time when it's not too cold. right?","directed":null,"U":"for a warm time when it's not too cold. right?","FIG":"lit","speaker":"*FAT:"},{"index":754,"Stimuli":"*FAT: and what about your Superman gloves. what are they for?","directed":null,"U":"and what about your Superman gloves. what are they for?","FIG":"lit","speaker":"*FAT:"},{"index":755,"Stimuli":"*CHI: their for when it's cold you can wear them.","directed":null,"U":"their for when it's cold you can wear them.","FIG":"lit","speaker":"*CHI:"},{"index":756,"Stimuli":"*FAT: when it's cold you can wear them. right?","directed":null,"U":"when it's cold you can wear them. right?","FIG":"lit","speaker":"*FAT:"},{"index":757,"Stimuli":"*CHI: yeah.","directed":null,"U":"yeah.","FIG":"lit","speaker":"*CHI:"},{"index":758,"Stimuli":"*CHI: and xxx.","directed":null,"U":"and xxx.","FIG":"lit","speaker":"*CHI:"},{"index":759,"Stimuli":"*CHI: yes. and that's the end of the story.","directed":null,"U":"yes. and that's the end of the story.","FIG":"lit","speaker":"*CHI:"},{"index":760,"Stimuli":"*CHI: is this my tee shirt and is this my tee shirt is this my tee shirt?","directed":null,"U":"is this my tee shirt and is this my tee shirt is this my tee shirt?","FIG":"lit","speaker":"*CHI:"},{"index":761,"Stimuli":"*FAT: yes.","directed":null,"U":"yes.","FIG":"lit","speaker":"*FAT:"},{"index":762,"Stimuli":"*CHI: okay. hang them up then.","directed":null,"U":"okay. hang them up then.","FIG":"lit","speaker":"*CHI:"}];
var c3 = [{"index":483,"Stimuli":"*FAT: why?","directed":null,"U":"why?","FIG":"lit","speaker":"*FAT:"},{"index":484,"Stimuli":"*CHI: because I'm tired of you.","directed":null,"U":"because I'm tired of you.","FIG":"lit","speaker":"*CHI:"},{"index":485,"Stimuli":"*FAT: your drawings are wonderful.","directed":"child-directed","U":"your drawings are wonderful.","FIG":"fig","speaker":"*FAT:"},{"index":486,"Stimuli":"*CHI: can I eat this cookie?","directed":null,"U":"can I eat this cookie?","FIG":"lit","speaker":"*CHI:"},{"index":487,"Stimuli":"*FAT: no. that's rocks.","directed":null,"U":"no. that's rocks.","FIG":"lit","speaker":"*FAT:"},{"index":488,"Stimuli":"*FAT: you can't eat that.","directed":null,"U":"you can't eat that.","FIG":"lit","speaker":"*FAT:"},{"index":489,"Stimuli":"*CHI: do you have a cookie that I can eat?","directed":null,"U":"do you have a cookie that I can eat?","FIG":"lit","speaker":"*CHI:"},{"index":490,"Stimuli":"*FAT: yeah. I've got one.","directed":null,"U":"yeah. I've got one.","FIG":"lit","speaker":"*FAT:"},{"index":491,"Stimuli":"*CHI: do you have a cookie for me to eat?","directed":null,"U":"do you have a cookie for me to eat?","FIG":"lit","speaker":"*CHI:"},{"index":492,"Stimuli":"*CHI: do you have a cookie to put on the big Christmas tree?","directed":"child-produced","U":"do you have a cookie to put on the big Christmas tree?","FIG":"fig","speaker":"*CHI:"},{"index":493,"Stimuli":"*CHI: is my old baby blanket is clean?","directed":null,"U":"is my old baby blanket is clean?","FIG":"lit","speaker":"*CHI:"},{"index":494,"Stimuli":"*CHI: you be the broom and I'll be the witch and Marky'll be the black cat.","directed":"child-produced","U":"you be the broom and I'll be the witch and Marky'll be the black cat.","FIG":"fig","speaker":"*CHI:"},{"index":495,"Stimuli":"*CHI: and I will be the witch.","directed":"child-produced","U":"and I will be the witch.","FIG":"fig","speaker":"*CHI:"},{"index":496,"Stimuli":"*CHI: I got idea.","directed":"child-produced","U":"I got idea.","FIG":"fig","speaker":"*CHI:"},{"index":497,"Stimuli":"*CHI: you be the witch and him be the black cat and you be the bat and I be the pumpkin.","directed":"child-produced","U":"you be the witch and him be the black cat and you be the bat and I be the pumpkin.","FIG":"fig","speaker":"*CHI:"},{"index":498,"Stimuli":"*FAT: okay.","directed":null,"U":"okay.","FIG":"lit","speaker":"*FAT:"},{"index":499,"Stimuli":"*CHI: pum@o. pum@o. pum@o.","directed":null,"U":"pum@o. pum@o. pum@o.","FIG":"lit","speaker":"*CHI:"},{"index":500,"Stimuli":"*FAT: Ross. do you want to play with your lego?","directed":null,"U":"Ross. do you want to play with your lego?","FIG":"lit","speaker":"*FAT:"},{"index":501,"Stimuli":"*CHI: pum@o. pum@o. pum@o [= pumpkin sound].","directed":null,"U":"pum@o. pum@o. pum@o [= pumpkin sound].","FIG":"lit","speaker":"*CHI:"},{"index":502,"Stimuli":"*FAT: do you want to play with your lego?","directed":null,"U":"do you want to play with your lego?","FIG":"lit","speaker":"*FAT:"}];
var c4 = [{"index":3,"Stimuli":"*CHI: they weren't able to sleep.","directed":null,"U":"they weren't able to sleep.","FIG":"lit","speaker":"*CHI:"},{"index":4,"Stimuli":"*CHI: we're going to see them next year when they wake up.","directed":"child-produced","U":"we're going to see them next year when they wake up.","FIG":"fig","speaker":"*CHI:"},{"index":5,"Stimuli":"*CHI: did you come here when you was a little baby?","directed":null,"U":"did you come here when you was a little baby?","FIG":"lit","speaker":"*CHI:"},{"index":6,"Stimuli":"*CHI: do you got the right money?","directed":null,"U":"do you got the right money?","FIG":"lit","speaker":"*CHI:"},{"index":7,"Stimuli":"*CHI: I want to go poo.","directed":null,"U":"I want to go poo.","FIG":"lit","speaker":"*CHI:"},{"index":8,"Stimuli":"*CHI: actually I don't want to go poo because I want to make a snowman.","directed":null,"U":"actually I don't want to go poo because I want to make a snowman.","FIG":"lit","speaker":"*CHI:"},{"index":9,"Stimuli":"*CHI: I jumped over it.","directed":null,"U":"I jumped over it.","FIG":"lit","speaker":"*CHI:"},{"index":10,"Stimuli":"*CHI: we're locked and closed.","directed":null,"U":"we're locked and closed.","FIG":"lit","speaker":"*CHI:"},{"index":11,"Stimuli":"*CHI: papa. we forgot to go ice skate.","directed":null,"U":"papa. we forgot to go ice skate.","FIG":"lit","speaker":"*CHI:"},{"index":12,"Stimuli":"*FAT: we forgot to go ice skating?","directed":null,"U":"we forgot to go ice skating?","FIG":"lit","speaker":"*FAT:"},{"index":13,"Stimuli":"*CHI: yeah.","directed":null,"U":"yeah.","FIG":"lit","speaker":"*CHI:"},{"index":14,"Stimuli":"*FAT: why?","directed":null,"U":"why?","FIG":"lit","speaker":"*FAT:"},{"index":15,"Stimuli":"*FAT: what were we going to do there?","directed":null,"U":"what were we going to do there?","FIG":"lit","speaker":"*FAT:"},{"index":16,"Stimuli":"*CHI: we forgot to go like that.","directed":null,"U":"we forgot to go like that.","FIG":"lit","speaker":"*CHI:"},{"index":17,"Stimuli":"*FAT: oh. we did?","directed":null,"U":"oh. we did?","FIG":"lit","speaker":"*FAT:"},{"index":18,"Stimuli":"*CHI: yeah.","directed":null,"U":"yeah.","FIG":"lit","speaker":"*CHI:"},{"index":19,"Stimuli":"*FAT: oh. you're right.","directed":null,"U":"oh. you're right.","FIG":"lit","speaker":"*FAT:"},{"index":20,"Stimuli":"*FAT: did Marky come with us?","directed":null,"U":"did Marky come with us?","FIG":"lit","speaker":"*FAT:"},{"index":21,"Stimuli":"*CHI: no.","directed":null,"U":"no.","FIG":"lit","speaker":"*CHI:"},{"index":22,"Stimuli":"*FAT: why did we forget to take Marky?","directed":null,"U":"why did we forget to take Marky?","FIG":"lit","speaker":"*FAT:"}];
var c5 = [{"index":143,"Stimuli":"*FAT: no. because Christmas is over.","directed":null,"U":"no. because Christmas is over.","FIG":"lit","speaker":"*FAT:"},{"index":144,"Stimuli":"*CHI: because why.","directed":null,"U":"because why.","FIG":"lit","speaker":"*CHI:"},{"index":145,"Stimuli":"*FAT: no more Thanksgiving. no more Halloween.","directed":null,"U":"no more Thanksgiving. no more Halloween.","FIG":"lit","speaker":"*FAT:"},{"index":146,"Stimuli":"*CHI: you forgot your party.","directed":null,"U":"you forgot your party.","FIG":"lit","speaker":"*CHI:"},{"index":147,"Stimuli":"*FAT: we're going to have Easter now.","directed":null,"U":"we're going to have Easter now.","FIG":"lit","speaker":"*FAT:"},{"index":148,"Stimuli":"*CHI: you forgot your party.","directed":null,"U":"you forgot your party.","FIG":"lit","speaker":"*CHI:"},{"index":149,"Stimuli":"*FAT: oh. no.","directed":null,"U":"oh. no.","FIG":"lit","speaker":"*FAT:"},{"index":150,"Stimuli":"*FAT: I have mine in the summer. honey.","directed":"child-directed","U":"I have mine in the summer. honey.","FIG":"fig","speaker":"*FAT:"},{"index":151,"Stimuli":"*FAT: mine comes in the summer.","directed":null,"U":"mine comes in the summer.","FIG":"lit","speaker":"*FAT:"},{"index":152,"Stimuli":"*FAT: yours is in the winter. mine is in the summer.","directed":null,"U":"yours is in the winter. mine is in the summer.","FIG":"lit","speaker":"*FAT:"},{"index":153,"Stimuli":"*CHI: and where's my mommy's?","directed":null,"U":"and where's my mommy's?","FIG":"lit","speaker":"*CHI:"},{"index":154,"Stimuli":"*FAT: your mommy's?","directed":null,"U":"your mommy's?","FIG":"lit","speaker":"*FAT:"},{"index":155,"Stimuli":"*FAT: pretty soon.","directed":"child-directed","U":"pretty soon.","FIG":"fig","speaker":"*FAT:"},{"index":156,"Stimuli":"*FAT: mommy's having her birthday pretty soon.","directed":"child-directed","U":"mommy's having her birthday pretty soon.","FIG":"fig","speaker":"*FAT:"},{"index":157,"Stimuli":"*FAT: that's the next birthday. is your mommy's.","directed":null,"U":"that's the next birthday. is your mommy's.","FIG":"lit","speaker":"*FAT:"},{"index":158,"Stimuli":"*FAT: it's coming up real soon.","directed":"child-directed","U":"it's coming up real soon.","FIG":"fig","speaker":"*FAT:"},{"index":159,"Stimuli":"*CHI: but would I already have +...","directed":null,"U":"but would I already have +...","FIG":"lit","speaker":"*CHI:"},{"index":160,"Stimuli":"*CHI: this is nice shirt [= This is a nice shirt.].","directed":null,"U":"this is nice shirt [= This is a nice shirt.].","FIG":"lit","speaker":"*CHI:"},{"index":161,"Stimuli":"*FAT: why is he trying to get out_of his chair?","directed":null,"U":"why is he trying to get out_of his chair?","FIG":"lit","speaker":"*FAT:"},{"index":162,"Stimuli":"*CHI: because he's not supposed to.","directed":null,"U":"because he's not supposed to.","FIG":"lit","speaker":"*CHI:"}];
var c6 = [{"index":1223,"Stimuli":"*FAT: no uppie right now.","directed":null,"U":"no uppie right now.","FIG":"lit","speaker":"*FAT:"},{"index":1224,"Stimuli":"*MOT: uppie?","directed":null,"U":"uppie?","FIG":"lit","speaker":"*MOT:"},{"index":1225,"Stimuli":"*MOT: come here Ross.","directed":null,"U":"come here Ross.","FIG":"lit","speaker":"*MOT:"},{"index":1226,"Stimuli":"*FAT: Mommy will give you uppies@c.","directed":null,"U":"Mommy will give you uppies@c.","FIG":"lit","speaker":"*FAT:"},{"index":1227,"Stimuli":"*MOT: here you go.","directed":null,"U":"here you go.","FIG":"lit","speaker":"*MOT:"},{"index":1228,"Stimuli":"*FAT: Mommy will give you a nice uppie.","directed":null,"U":"Mommy will give you a nice uppie.","FIG":"lit","speaker":"*FAT:"},{"index":1229,"Stimuli":"*MOT: &=laughs.","directed":null,"U":"&=laughs.","FIG":"lit","speaker":"*MOT:"},{"index":1230,"Stimuli":"*FAT: you got_to watch out for her she's mean Ross.","directed":"child-directed","U":"you got_to watch out for her she's mean Ross.","FIG":"fig","speaker":"*FAT:"},{"index":1231,"Stimuli":"*FAT: you better watch out for Ross he's really coming +...","directed":null,"U":"you better watch out for Ross he's really coming +...","FIG":"lit","speaker":"*FAT:"},{"index":1232,"Stimuli":"*MOT: www.","directed":null,"U":"www.","FIG":"lit","speaker":"*MOT:"},{"index":1233,"Stimuli":"*MOT: come on I'll uppie you.","directed":null,"U":"come on I'll uppie you.","FIG":"lit","speaker":"*MOT:"},{"index":1234,"Stimuli":"*MOT: he doesn't want to do uppie.","directed":null,"U":"he doesn't want to do uppie.","FIG":"lit","speaker":"*MOT:"},{"index":1235,"Stimuli":"*MOT: he just wants to hit me.","directed":null,"U":"he just wants to hit me.","FIG":"lit","speaker":"*MOT:"},{"index":1236,"Stimuli":"*FAT: he just wants to play.","directed":null,"U":"he just wants to play.","FIG":"lit","speaker":"*FAT:"},{"index":1237,"Stimuli":"*MOT: play.","directed":null,"U":"play.","FIG":"lit","speaker":"*MOT:"},{"index":1238,"Stimuli":"*CHI: 0 [=! screaming and laughing].","directed":null,"U":"0 [=! screaming and laughing].","FIG":"lit","speaker":"*CHI:"},{"index":1239,"Stimuli":"*CHI: <her> [\/] her got me.","directed":null,"U":"<her> [\/] her got me.","FIG":"lit","speaker":"*CHI:"},{"index":1240,"Stimuli":"*FAT: your not an uppie baby you're a play baby.","directed":null,"U":"your not an uppie baby you're a play baby.","FIG":"lit","speaker":"*FAT:"},{"index":1241,"Stimuli":"*CHI: yeah.","directed":null,"U":"yeah.","FIG":"lit","speaker":"*CHI:"},{"index":1242,"Stimuli":"*FAT: you're not an uppie.","directed":null,"U":"you're not an uppie.","FIG":"lit","speaker":"*FAT:"}];
var c7 = [{"index":843,"Stimuli":"*CHI: you said. yes@q.","directed":null,"U":"you said. yes@q.","FIG":"lit","speaker":"*CHI:"},{"index":844,"Stimuli":"*FAT: ya.","directed":null,"U":"ya.","FIG":"lit","speaker":"*FAT:"},{"index":845,"Stimuli":"*CHI: I can?","directed":null,"U":"I can?","FIG":"lit","speaker":"*CHI:"},{"index":846,"Stimuli":"*FAT: &-uh. huh.","directed":null,"U":"&-uh. huh.","FIG":"lit","speaker":"*FAT:"},{"index":847,"Stimuli":"*CHI: and you guys won't yell?","directed":null,"U":"and you guys won't yell?","FIG":"lit","speaker":"*CHI:"},{"index":848,"Stimuli":"*FAT: yeah. go ahead make a mess.","directed":null,"U":"yeah. go ahead make a mess.","FIG":"lit","speaker":"*FAT:"},{"index":849,"Stimuli":"*FAT: are you jogging Ross?","directed":null,"U":"are you jogging Ross?","FIG":"lit","speaker":"*FAT:"},{"index":850,"Stimuli":"*CHI: no.","directed":null,"U":"no.","FIG":"lit","speaker":"*CHI:"},{"index":851,"Stimuli":"*FAT: do you want to talk to the tape recorder and tell them xxx.","directed":null,"U":"do you want to talk to the tape recorder and tell them xxx.","FIG":"lit","speaker":"*FAT:"},{"index":852,"Stimuli":"*CHI: nah.","directed":null,"U":"nah.","FIG":"lit","speaker":"*CHI:"},{"index":853,"Stimuli":"*FAT: tell us about your jogging.","directed":null,"U":"tell us about your jogging.","FIG":"lit","speaker":"*FAT:"},{"index":854,"Stimuli":"*FAT: tells us about how you jog.","directed":null,"U":"tells us about how you jog.","FIG":"lit","speaker":"*FAT:"},{"index":855,"Stimuli":"*CHI: I can go fast.","directed":null,"U":"I can go fast.","FIG":"lit","speaker":"*CHI:"},{"index":856,"Stimuli":"*CHI: and a new race car.","directed":null,"U":"and a new race car.","FIG":"lit","speaker":"*CHI:"},{"index":857,"Stimuli":"*FAT: like a race car.","directed":"child-directed","U":"like a race car.","FIG":"fig","speaker":"*FAT:"},{"index":858,"Stimuli":"*CHI: yeah.","directed":null,"U":"yeah.","FIG":"lit","speaker":"*CHI:"},{"index":859,"Stimuli":"*FAT: xxx.","directed":null,"U":"xxx.","FIG":"lit","speaker":"*FAT:"},{"index":860,"Stimuli":"*FAT: what else?","directed":null,"U":"what else?","FIG":"lit","speaker":"*FAT:"},{"index":861,"Stimuli":"*CHI: and go trick+or+treating when my cousin comes.","directed":null,"U":"and go trick+or+treating when my cousin comes.","FIG":"lit","speaker":"*CHI:"},{"index":862,"Stimuli":"*FAT: uhuh.","directed":null,"U":"uhuh.","FIG":"lit","speaker":"*FAT:"}];
var c8 = [{"index":1363,"Stimuli":"*CHI: will you jump me?","directed":null,"U":"will you jump me?","FIG":"lit","speaker":"*CHI:"},{"index":1364,"Stimuli":"*FAT: do you want me to make you jump?","directed":null,"U":"do you want me to make you jump?","FIG":"lit","speaker":"*FAT:"},{"index":1365,"Stimuli":"*CHI: yeah. will you make me jump?","directed":null,"U":"yeah. will you make me jump?","FIG":"lit","speaker":"*CHI:"},{"index":1366,"Stimuli":"*CHI: I hurt my finger at the pillow [= on the pillow].","directed":null,"U":"I hurt my finger at the pillow [= on the pillow].","FIG":"lit","speaker":"*CHI:"},{"index":1367,"Stimuli":"*CHI: where is I?","directed":null,"U":"where is I?","FIG":"lit","speaker":"*CHI:"},{"index":1368,"Stimuli":"*MOT: where am I?","directed":null,"U":"where am I?","FIG":"lit","speaker":"*MOT:"},{"index":1369,"Stimuli":"*CHI: here I am I.","directed":null,"U":"here I am I.","FIG":"lit","speaker":"*CHI:"},{"index":1370,"Stimuli":"*CHI: I have_to get my shoes on. [+ dia]","directed":null,"U":"I have_to get my shoes on. [+ dia]","FIG":"lit","speaker":"*CHI:"},{"index":1371,"Stimuli":"*CHI: I have_to get on. my shoes and socks on. [+ dia]","directed":null,"U":"I have_to get on. my shoes and socks on. [+ dia]","FIG":"lit","speaker":"*CHI:"},{"index":1372,"Stimuli":"*CHI: will you button this off? [+ dia]","directed":null,"U":"will you button this off? [+ dia]","FIG":"lit","speaker":"*CHI:"},{"index":1373,"Stimuli":"*CHI: I'm going to put my cowboy boots in my room so I can play with you guys.","directed":null,"U":"I'm going to put my cowboy boots in my room so I can play with you guys.","FIG":"lit","speaker":"*CHI:"},{"index":1374,"Stimuli":"*CHI: there I can play with you guys now okay.","directed":null,"U":"there I can play with you guys now okay.","FIG":"lit","speaker":"*CHI:"},{"index":1375,"Stimuli":"*CHI: we want to go to the museum!","directed":null,"U":"we want to go to the museum!","FIG":"lit","speaker":"*CHI:"},{"index":1376,"Stimuli":"*CHI: I was going to take them all off by myself.","directed":"child-produced","U":"I was going to take them all off by myself.","FIG":"fig","speaker":"*CHI:"},{"index":1377,"Stimuli":"*CHI: I was going to tell you that I was going to put them in my room so I can play with you guys.","directed":null,"U":"I was going to tell you that I was going to put them in my room so I can play with you guys.","FIG":"lit","speaker":"*CHI:"},{"index":1378,"Stimuli":"*CHI: we want to go to the museum!","directed":null,"U":"we want to go to the museum!","FIG":"lit","speaker":"*CHI:"},{"index":1379,"Stimuli":"*FAT: we do?","directed":null,"U":"we do?","FIG":"lit","speaker":"*FAT:"},{"index":1380,"Stimuli":"*CHI: yeah.","directed":null,"U":"yeah.","FIG":"lit","speaker":"*CHI:"},{"index":1381,"Stimuli":"*FAT: what are we going to do there?","directed":null,"U":"what are we going to do there?","FIG":"lit","speaker":"*FAT:"},{"index":1382,"Stimuli":"*CHI: we're going to play there.","directed":null,"U":"we're going to play there.","FIG":"lit","speaker":"*CHI:"}];
var c9 = [{"index":1163,"Stimuli":"*CHI: nope.","directed":null,"U":"nope.","FIG":"lit","speaker":"*CHI:"},{"index":1164,"Stimuli":"*FAT: yep your mouth is dirty.","directed":null,"U":"yep your mouth is dirty.","FIG":"lit","speaker":"*FAT:"},{"index":1165,"Stimuli":"*FAT: yes it is.","directed":null,"U":"yes it is.","FIG":"lit","speaker":"*FAT:"},{"index":1166,"Stimuli":"*FAT: yes it is I can see it.","directed":null,"U":"yes it is I can see it.","FIG":"lit","speaker":"*FAT:"},{"index":1167,"Stimuli":"*FAT: it's not so bad but we'll clean it okay.","directed":null,"U":"it's not so bad but we'll clean it okay.","FIG":"lit","speaker":"*FAT:"},{"index":1168,"Stimuli":"*CHI: no!","directed":null,"U":"no!","FIG":"lit","speaker":"*CHI:"},{"index":1169,"Stimuli":"*FAT: oh Mom that's so nice of you.","directed":null,"U":"oh Mom that's so nice of you.","FIG":"lit","speaker":"*FAT:"},{"index":1170,"Stimuli":"*FAT: okay you're finished right Ross?","directed":null,"U":"okay you're finished right Ross?","FIG":"lit","speaker":"*FAT:"},{"index":1171,"Stimuli":"*CHI: ye:ah!","directed":null,"U":"ye:ah!","FIG":"lit","speaker":"*CHI:"},{"index":1172,"Stimuli":"*FAT: very good cake mom.","directed":null,"U":"very good cake mom.","FIG":"lit","speaker":"*FAT:"},{"index":1173,"Stimuli":"*FAT: excellent frosting.","directed":"adult-directed","U":"excellent frosting.","FIG":"fig","speaker":"*FAT:"},{"index":1174,"Stimuli":"*CHI: excellent frosting.","directed":"child-produced","U":"excellent frosting.","FIG":"fig","speaker":"*CHI:"},{"index":1175,"Stimuli":"*FAT: excellent frosting.","directed":"child-directed","U":"excellent frosting.","FIG":"fig","speaker":"*FAT:"},{"index":1176,"Stimuli":"*FAT: super moist.","directed":"adult-directed","U":"super moist.","FIG":"fig","speaker":"*FAT:"},{"index":1177,"Stimuli":"*MOT: it's excellent frosting because it's homemade.","directed":"adult-directed","U":"it's excellent frosting because it's homemade.","FIG":"fig","speaker":"*MOT:"},{"index":1178,"Stimuli":"*CHI: what are we going to have now?","directed":null,"U":"what are we going to have now?","FIG":"lit","speaker":"*CHI:"},{"index":1179,"Stimuli":"*FAT: nothing.","directed":"child-directed","U":"nothing.","FIG":"fig","speaker":"*FAT:"},{"index":1180,"Stimuli":"*CHI: huh?","directed":null,"U":"huh?","FIG":"lit","speaker":"*CHI:"},{"index":1181,"Stimuli":"*CHI: xxx.","directed":null,"U":"xxx.","FIG":"lit","speaker":"*CHI:"},{"index":1182,"Stimuli":"*CHI: I have_to wash my hands.","directed":null,"U":"I have_to wash my hands.","FIG":"lit","speaker":"*CHI:"}];
var c10 = [{"index":823,"Stimuli":"*FAT: do you want to hear Great_Pumkin?","directed":null,"U":"do you want to hear Great_Pumkin?","FIG":"lit","speaker":"*FAT:"},{"index":824,"Stimuli":"*CHI: yeah!","directed":null,"U":"yeah!","FIG":"lit","speaker":"*CHI:"},{"index":825,"Stimuli":"*FAT: okay I'm going to turn this part off.","directed":null,"U":"okay I'm going to turn this part off.","FIG":"lit","speaker":"*FAT:"},{"index":826,"Stimuli":"*CHI: we don't like stupid.","directed":null,"U":"we don't like stupid.","FIG":"lit","speaker":"*CHI:"},{"index":827,"Stimuli":"*CHI: stupid.s a bad word.","directed":null,"U":"stupid.s a bad word.","FIG":"lit","speaker":"*CHI:"},{"index":828,"Stimuli":"*FAT: who says stupid@q?","directed":null,"U":"who says stupid@q?","FIG":"lit","speaker":"*FAT:"},{"index":829,"Stimuli":"*CHI: Charlie Brown said it.","directed":null,"U":"Charlie Brown said it.","FIG":"lit","speaker":"*CHI:"},{"index":830,"Stimuli":"*CHI: we don't like it.","directed":null,"U":"we don't like it.","FIG":"lit","speaker":"*CHI:"},{"index":831,"Stimuli":"*CHI: I want to hear the Great Pumpkin.","directed":null,"U":"I want to hear the Great Pumpkin.","FIG":"lit","speaker":"*CHI:"},{"index":832,"Stimuli":"*FAT: you hafta hear it?","directed":null,"U":"you hafta hear it?","FIG":"lit","speaker":"*FAT:"},{"index":833,"Stimuli":"*CHI: yeah.. you writing that to get raisins and chocolate chips for me?","directed":null,"U":"yeah.. you writing that to get raisins and chocolate chips for me?","FIG":"lit","speaker":"*CHI:"},{"index":834,"Stimuli":"*FAT: yeah.","directed":null,"U":"yeah.","FIG":"lit","speaker":"*FAT:"},{"index":835,"Stimuli":"*CHI: why?","directed":null,"U":"why?","FIG":"lit","speaker":"*CHI:"},{"index":836,"Stimuli":"*FAT: because I gotta remember.","directed":null,"U":"because I gotta remember.","FIG":"lit","speaker":"*FAT:"},{"index":837,"Stimuli":"*CHI: yeah. I'm going to eat my yogurt all up so the ghosts won't get it.","directed":"child-directed","U":"yeah. I'm going to eat my yogurt all up so the ghosts won't get it.","FIG":"fig","speaker":"*CHI:"},{"index":838,"Stimuli":"*CHI: I do some jogging.","directed":null,"U":"I do some jogging.","FIG":"lit","speaker":"*CHI:"},{"index":839,"Stimuli":"*CHI: oh. oh. there's a mess!","directed":null,"U":"oh. oh. there's a mess!","FIG":"lit","speaker":"*CHI:"},{"index":840,"Stimuli":"*FAT: don't worry about it.","directed":null,"U":"don't worry about it.","FIG":"lit","speaker":"*FAT:"},{"index":841,"Stimuli":"*CHI: you guys like me to make a mess?","directed":null,"U":"you guys like me to make a mess?","FIG":"lit","speaker":"*CHI:"},{"index":842,"Stimuli":"*FAT: yeah. okay.","directed":null,"U":"yeah. okay.","FIG":"lit","speaker":"*FAT:"}];
var c11 = [{"index":223,"Stimuli":"*FAT: say please. say please.","directed":null,"U":"say please. say please.","FIG":"lit","speaker":"*FAT:"},{"index":224,"Stimuli":"*FAT: mommy. can Mark have a little bottle to play with?","directed":null,"U":"mommy. can Mark have a little bottle to play with?","FIG":"lit","speaker":"*FAT:"},{"index":225,"Stimuli":"*FAT: Ross has got all the good toys. don't you Ross.","directed":"child-directed","U":"Ross has got all the good toys. don't you Ross.","FIG":"fig","speaker":"*FAT:"},{"index":226,"Stimuli":"*CHI: yeah.","directed":null,"U":"yeah.","FIG":"lit","speaker":"*CHI:"},{"index":227,"Stimuli":"*CHI: and I said please.","directed":null,"U":"and I said please.","FIG":"lit","speaker":"*CHI:"},{"index":228,"Stimuli":"*FAT: yeah.","directed":null,"U":"yeah.","FIG":"lit","speaker":"*FAT:"},{"index":229,"Stimuli":"*CHI: yep.","directed":null,"U":"yep.","FIG":"lit","speaker":"*CHI:"},{"index":230,"Stimuli":"*CHI: this is our bottle.","directed":null,"U":"this is our bottle.","FIG":"lit","speaker":"*CHI:"},{"index":231,"Stimuli":"*FAT: okay. is your car all cleaned up?","directed":"child-directed","U":"okay. is your car all cleaned up?","FIG":"fig","speaker":"*FAT:"},{"index":232,"Stimuli":"*CHI: no.","directed":null,"U":"no.","FIG":"lit","speaker":"*CHI:"},{"index":233,"Stimuli":"*FAT: what's happened with your car?","directed":null,"U":"what's happened with your car?","FIG":"lit","speaker":"*FAT:"},{"index":234,"Stimuli":"*CHI: it got cracked.","directed":null,"U":"it got cracked.","FIG":"lit","speaker":"*CHI:"},{"index":235,"Stimuli":"*FAT: it got cracked?","directed":null,"U":"it got cracked?","FIG":"lit","speaker":"*FAT:"},{"index":236,"Stimuli":"*CHI: yeah.","directed":null,"U":"yeah.","FIG":"lit","speaker":"*CHI:"},{"index":237,"Stimuli":"*FAT: how come?","directed":null,"U":"how come?","FIG":"lit","speaker":"*FAT:"},{"index":238,"Stimuli":"*CHI: because the car did it.","directed":null,"U":"because the car did it.","FIG":"lit","speaker":"*CHI:"},{"index":239,"Stimuli":"*FAT: it did?","directed":null,"U":"it did?","FIG":"lit","speaker":"*FAT:"},{"index":240,"Stimuli":"*CHI: yeah.","directed":null,"U":"yeah.","FIG":"lit","speaker":"*CHI:"},{"index":241,"Stimuli":"*FAT: &-uh &-uh.","directed":null,"U":"&-uh &-uh.","FIG":"lit","speaker":"*FAT:"},{"index":242,"Stimuli":"*FAT: when did that happen?","directed":null,"U":"when did that happen?","FIG":"lit","speaker":"*FAT:"}];
var c12 = [{"index":263,"Stimuli":"*CHI: yeah.","directed":null,"U":"yeah.","FIG":"lit","speaker":"*CHI:"},{"index":264,"Stimuli":"*FAT: well. what happened?","directed":null,"U":"well. what happened?","FIG":"lit","speaker":"*FAT:"},{"index":265,"Stimuli":"*FAT: was there a_lot_of noise. or what?","directed":"child-directed","U":"was there a_lot_of noise. or what?","FIG":"fig","speaker":"*FAT:"},{"index":266,"Stimuli":"*CHI: yeah.","directed":null,"U":"yeah.","FIG":"lit","speaker":"*CHI:"},{"index":267,"Stimuli":"*FAT: it was pretty bad?","directed":"child-directed","U":"it was pretty bad?","FIG":"fig","speaker":"*FAT:"},{"index":268,"Stimuli":"*CHI: yeah.","directed":null,"U":"yeah.","FIG":"lit","speaker":"*CHI:"},{"index":269,"Stimuli":"*FAT: oh my. terrible.","directed":"child-directed","U":"oh my. terrible.","FIG":"fig","speaker":"*FAT:"},{"index":270,"Stimuli":"*CHI: and I said no no cars +...","directed":null,"U":"and I said no no cars +...","FIG":"lit","speaker":"*CHI:"},{"index":271,"Stimuli":"*FAT: yeah.","directed":null,"U":"yeah.","FIG":"lit","speaker":"*FAT:"},{"index":272,"Stimuli":"*CHI: +, and they cracked the vacuum cleaner.","directed":null,"U":"+, and they cracked the vacuum cleaner.","FIG":"lit","speaker":"*CHI:"},{"index":273,"Stimuli":"*FAT: they did?","directed":null,"U":"they did?","FIG":"lit","speaker":"*FAT:"},{"index":274,"Stimuli":"*FAT: I see.","directed":null,"U":"I see.","FIG":"lit","speaker":"*FAT:"},{"index":275,"Stimuli":"*FAT: well. can you fix it?","directed":null,"U":"well. can you fix it?","FIG":"lit","speaker":"*FAT:"},{"index":276,"Stimuli":"*CHI: no. I can clean it.","directed":null,"U":"no. I can clean it.","FIG":"lit","speaker":"*CHI:"},{"index":277,"Stimuli":"*FAT: you can clean it out where it's messy?","directed":null,"U":"you can clean it out where it's messy?","FIG":"lit","speaker":"*FAT:"},{"index":278,"Stimuli":"*CHI: yeah.","directed":null,"U":"yeah.","FIG":"lit","speaker":"*CHI:"},{"index":279,"Stimuli":"*FAT: okay.","directed":null,"U":"okay.","FIG":"lit","speaker":"*FAT:"},{"index":280,"Stimuli":"*FAT: good boy.","directed":null,"U":"good boy.","FIG":"lit","speaker":"*FAT:"},{"index":281,"Stimuli":"*FAT: can Mark help?","directed":null,"U":"can Mark help?","FIG":"lit","speaker":"*FAT:"},{"index":282,"Stimuli":"*CHI: yeah.","directed":null,"U":"yeah.","FIG":"lit","speaker":"*CHI:"}];
var c13 = [{"index":1343,"Stimuli":"*FAT: I got one more word.","directed":null,"U":"I got one more word.","FIG":"lit","speaker":"*FAT:"},{"index":1344,"Stimuli":"*FAT: one last word.","directed":null,"U":"one last word.","FIG":"lit","speaker":"*FAT:"},{"index":1345,"Stimuli":"*CHI: what?","directed":null,"U":"what?","FIG":"lit","speaker":"*CHI:"},{"index":1346,"Stimuli":"*FAT: now what does the word excellent mean?","directed":null,"U":"now what does the word excellent mean?","FIG":"lit","speaker":"*FAT:"},{"index":1347,"Stimuli":"*CHI: it means cake. yummy.","directed":"child-produced","U":"it means cake. yummy.","FIG":"fig","speaker":"*CHI:"},{"index":1348,"Stimuli":"*CHI: I got chocolate up on you.","directed":null,"U":"I got chocolate up on you.","FIG":"lit","speaker":"*CHI:"},{"index":1349,"Stimuli":"*FAT: do you want to take it off?","directed":null,"U":"do you want to take it off?","FIG":"lit","speaker":"*FAT:"},{"index":1350,"Stimuli":"*FAT: he said xxx.","directed":null,"U":"he said xxx.","FIG":"lit","speaker":"*FAT:"},{"index":1351,"Stimuli":"*MOT: oh Mark.","directed":null,"U":"oh Mark.","FIG":"lit","speaker":"*MOT:"},{"index":1352,"Stimuli":"*FAT: okay you don't need any more cake right?","directed":null,"U":"okay you don't need any more cake right?","FIG":"lit","speaker":"*FAT:"},{"index":1353,"Stimuli":"*FAT: you're going to have_to wash your hands now right?","directed":null,"U":"you're going to have_to wash your hands now right?","FIG":"lit","speaker":"*FAT:"},{"index":1354,"Stimuli":"*FAT: I think Mark can have a little more food.","directed":null,"U":"I think Mark can have a little more food.","FIG":"lit","speaker":"*FAT:"},{"index":1355,"Stimuli":"*CHI: ah:.","directed":null,"U":"ah:.","FIG":"lit","speaker":"*CHI:"},{"index":1356,"Stimuli":"*CHI: hey. this makes some noise. do you want to hear it?","directed":null,"U":"hey. this makes some noise. do you want to hear it?","FIG":"lit","speaker":"*CHI:"},{"index":1357,"Stimuli":"*CHI: this is my store and it makes a sound.","directed":null,"U":"this is my store and it makes a sound.","FIG":"lit","speaker":"*CHI:"},{"index":1358,"Stimuli":"*FAT: that's a cash register.","directed":null,"U":"that's a cash register.","FIG":"lit","speaker":"*FAT:"},{"index":1359,"Stimuli":"*CHI: it's a store.","directed":null,"U":"it's a store.","FIG":"lit","speaker":"*CHI:"},{"index":1360,"Stimuli":"*CHI: it's a cash register Ross.","directed":null,"U":"it's a cash register Ross.","FIG":"lit","speaker":"*CHI:"},{"index":1361,"Stimuli":"*CHI: a store.","directed":null,"U":"a store.","FIG":"lit","speaker":"*CHI:"},{"index":1362,"Stimuli":"*FAT: it's part of a store but not the whole store.","directed":null,"U":"it's part of a store but not the whole store.","FIG":"lit","speaker":"*FAT:"}];
var c14 = [{"index":783,"Stimuli":"*MAR: Tee Tee [x 3].","directed":null,"U":"Tee Tee [x 3].","FIG":"lit","speaker":"*MAR:"},{"index":784,"Stimuli":"*MOT: nice Titus.","directed":null,"U":"nice Titus.","FIG":"lit","speaker":"*MOT:"},{"index":785,"Stimuli":"*MAR: nice Titus.","directed":null,"U":"nice Titus.","FIG":"lit","speaker":"*MAR:"},{"index":786,"Stimuli":"*MAR: dat [: that] Titus [= that's Titus].","directed":null,"U":"dat [: that] Titus [= that's Titus].","FIG":"lit","speaker":"*MAR:"},{"index":787,"Stimuli":"*MAR: bumbo@c.","directed":null,"U":"bumbo@c.","FIG":"lit","speaker":"*MAR:"},{"index":788,"Stimuli":"*CHI: what's gray?","directed":null,"U":"what's gray?","FIG":"lit","speaker":"*CHI:"},{"index":789,"Stimuli":"*CHI: Mary then points at colors on quilt to illustrate.","directed":null,"U":"Mary then points at colors on quilt to illustrate.","FIG":"lit","speaker":"*CHI:"},{"index":790,"Stimuli":"*CHI: what's big red sticks on the dark?","directed":null,"U":"what's big red sticks on the dark?","FIG":"lit","speaker":"*CHI:"},{"index":791,"Stimuli":"*CHI: let's do some more playing.","directed":null,"U":"let's do some more playing.","FIG":"lit","speaker":"*CHI:"},{"index":792,"Stimuli":"*CHI: I'm down the chimney.","directed":"child-produced","U":"I'm down the chimney.","FIG":"fig","speaker":"*CHI:"},{"index":793,"Stimuli":"*FAT: just like Santa Claus.","directed":null,"U":"just like Santa Claus.","FIG":"lit","speaker":"*FAT:"},{"index":794,"Stimuli":"*CHI: up on the roof top. quick. quick. quick. down through the chimney with good Saint Nick.","directed":null,"U":"up on the roof top. quick. quick. quick. down through the chimney with good Saint Nick.","FIG":"lit","speaker":"*CHI:"},{"index":795,"Stimuli":"*FAT: Ross do you want to sing it?","directed":null,"U":"Ross do you want to sing it?","FIG":"lit","speaker":"*FAT:"},{"index":796,"Stimuli":"*CHI: huh?","directed":null,"U":"huh?","FIG":"lit","speaker":"*CHI:"},{"index":797,"Stimuli":"*CHI: do you want to sing that song?","directed":null,"U":"do you want to sing that song?","FIG":"lit","speaker":"*CHI:"},{"index":798,"Stimuli":"*CHI: xxx.","directed":null,"U":"xxx.","FIG":"lit","speaker":"*CHI:"},{"index":799,"Stimuli":"*FAT: say up on the roof top.","directed":null,"U":"say up on the roof top.","FIG":"lit","speaker":"*FAT:"},{"index":800,"Stimuli":"*CHI: up on the roof top. quick. quick. quick. down through the chimney with Nick. Nick. Nick.","directed":null,"U":"up on the roof top. quick. quick. quick. down through the chimney with Nick. Nick. Nick.","FIG":"lit","speaker":"*CHI:"},{"index":801,"Stimuli":"*CHI: Nick Nick Nick?","directed":null,"U":"Nick Nick Nick?","FIG":"lit","speaker":"*CHI:"},{"index":802,"Stimuli":"*CHI: yeah.","directed":null,"U":"yeah.","FIG":"lit","speaker":"*CHI:"}];
var c15 = [{"index":23,"Stimuli":"*CHI: no.","directed":null,"U":"no.","FIG":"lit","speaker":"*CHI:"},{"index":24,"Stimuli":"*FAT: but why did we forget to take Marky?","directed":null,"U":"but why did we forget to take Marky?","FIG":"lit","speaker":"*FAT:"},{"index":25,"Stimuli":"*CHI: because he get sick.","directed":null,"U":"because he get sick.","FIG":"lit","speaker":"*CHI:"},{"index":26,"Stimuli":"*FAT: I want him next time.","directed":null,"U":"I want him next time.","FIG":"lit","speaker":"*FAT:"},{"index":27,"Stimuli":"*CHI: okay.","directed":null,"U":"okay.","FIG":"lit","speaker":"*CHI:"},{"index":28,"Stimuli":"*FAT: how about you?","directed":null,"U":"how about you?","FIG":"lit","speaker":"*FAT:"},{"index":29,"Stimuli":"*FAT: do you want him?","directed":null,"U":"do you want him?","FIG":"lit","speaker":"*FAT:"},{"index":30,"Stimuli":"*CHI: yeah.","directed":null,"U":"yeah.","FIG":"lit","speaker":"*CHI:"},{"index":31,"Stimuli":"*FAT: yes. you want him. don't you.","directed":null,"U":"yes. you want him. don't you.","FIG":"lit","speaker":"*FAT:"},{"index":32,"Stimuli":"*CHI: the Hulk get the part [= is falling apart].","directed":null,"U":"the Hulk get the part [= is falling apart].","FIG":"lit","speaker":"*CHI:"},{"index":33,"Stimuli":"*FAT: the part?","directed":null,"U":"the part?","FIG":"lit","speaker":"*FAT:"},{"index":34,"Stimuli":"*FAT: let's take a look.","directed":null,"U":"let's take a look.","FIG":"lit","speaker":"*FAT:"},{"index":35,"Stimuli":"*FAT: he's going to be okay. Ross.","directed":null,"U":"he's going to be okay. Ross.","FIG":"lit","speaker":"*FAT:"},{"index":36,"Stimuli":"*FAT: that Hulk's going to be okay.","directed":null,"U":"that Hulk's going to be okay.","FIG":"lit","speaker":"*FAT:"},{"index":37,"Stimuli":"*FAT: tell me about this Hulk. okay?","directed":null,"U":"tell me about this Hulk. okay?","FIG":"lit","speaker":"*FAT:"},{"index":38,"Stimuli":"*CHI: he's apart.","directed":null,"U":"he's apart.","FIG":"lit","speaker":"*CHI:"},{"index":39,"Stimuli":"*FAT: open it up.","directed":null,"U":"open it up.","FIG":"lit","speaker":"*FAT:"},{"index":40,"Stimuli":"*FAT: open it up.","directed":null,"U":"open it up.","FIG":"lit","speaker":"*FAT:"},{"index":41,"Stimuli":"*FAT: now. what does he do?","directed":null,"U":"now. what does he do?","FIG":"lit","speaker":"*FAT:"},{"index":42,"Stimuli":"*CHI: he broke that man.","directed":"child-produced","U":"he broke that man.","FIG":"fig","speaker":"*CHI:"}];
var c16 = [{"index":43,"Stimuli":"*FAT: yeah. because the man was bad. what else.","directed":null,"U":"yeah. because the man was bad. what else.","FIG":"lit","speaker":"*FAT:"},{"index":44,"Stimuli":"*FAT: what is he saying?","directed":null,"U":"what is he saying?","FIG":"lit","speaker":"*FAT:"},{"index":45,"Stimuli":"*FAT: what is the Hulk saying?","directed":null,"U":"what is the Hulk saying?","FIG":"lit","speaker":"*FAT:"},{"index":46,"Stimuli":"*CHI: he say rrraar@o!.","directed":null,"U":"he say rrraar@o!.","FIG":"lit","speaker":"*CHI:"},{"index":47,"Stimuli":"*CHI: rrraar@o!.","directed":null,"U":"rrraar@o!.","FIG":"lit","speaker":"*CHI:"},{"index":48,"Stimuli":"*FAT: okay.","directed":null,"U":"okay.","FIG":"lit","speaker":"*FAT:"},{"index":49,"Stimuli":"*CHI: and then he says Little Jack Horner sat in the corner eating the Christmas pie.","directed":null,"U":"and then he says Little Jack Horner sat in the corner eating the Christmas pie.","FIG":"lit","speaker":"*CHI:"},{"index":50,"Stimuli":"*CHI: and he put in his thumb and took out a plum and said oh:. oh:. what a good boy am I!","directed":"child-produced","U":"and he put in his thumb and took out a plum and said oh:. oh:. what a good boy am I!","FIG":"fig","speaker":"*CHI:"},{"index":51,"Stimuli":"*FAT: very good!","directed":null,"U":"very good!","FIG":"lit","speaker":"*FAT:"},{"index":52,"Stimuli":"*FAT: now. let's turn the page.","directed":null,"U":"now. let's turn the page.","FIG":"lit","speaker":"*FAT:"},{"index":53,"Stimuli":"*FAT: now. what's the Hulk doing here?","directed":null,"U":"now. what's the Hulk doing here?","FIG":"lit","speaker":"*FAT:"},{"index":54,"Stimuli":"*CHI: him do no Hulk.","directed":null,"U":"him do no Hulk.","FIG":"lit","speaker":"*CHI:"},{"index":55,"Stimuli":"*FAT: there's no Hulk there?","directed":null,"U":"there's no Hulk there?","FIG":"lit","speaker":"*FAT:"},{"index":56,"Stimuli":"*CHI: no.","directed":null,"U":"no.","FIG":"lit","speaker":"*CHI:"},{"index":57,"Stimuli":"*FAT: well. what's happening?","directed":null,"U":"well. what's happening?","FIG":"lit","speaker":"*FAT:"},{"index":58,"Stimuli":"*CHI: the mean guys are scary.","directed":null,"U":"the mean guys are scary.","FIG":"lit","speaker":"*CHI:"},{"index":59,"Stimuli":"*FAT: they're scary. &-uh &-uh.","directed":null,"U":"they're scary. &-uh &-uh.","FIG":"lit","speaker":"*FAT:"},{"index":60,"Stimuli":"*FAT: and there's a snake. right?","directed":null,"U":"and there's a snake. right?","FIG":"lit","speaker":"*FAT:"},{"index":61,"Stimuli":"*CHI: yeah.","directed":null,"U":"yeah.","FIG":"lit","speaker":"*CHI:"},{"index":62,"Stimuli":"*FAT: there's a snake here.","directed":null,"U":"there's a snake here.","FIG":"lit","speaker":"*FAT:"}];
var c17 = [{"index":603,"Stimuli":"*CHI: watch out.","directed":null,"U":"watch out.","FIG":"lit","speaker":"*CHI:"},{"index":604,"Stimuli":"*CHI: you'll cut your hand.","directed":null,"U":"you'll cut your hand.","FIG":"lit","speaker":"*CHI:"},{"index":605,"Stimuli":"*CHI: another big poo did come.","directed":"child-produced","U":"another big poo did come.","FIG":"fig","speaker":"*CHI:"},{"index":606,"Stimuli":null,"directed":null,"U":null,"FIG":"lit","speaker":"From file <030001c.cha>"},{"index":607,"Stimuli":"*CHI: don't cut myself.","directed":null,"U":"don't cut myself.","FIG":"lit","speaker":"*CHI:"},{"index":608,"Stimuli":"*CHI: why is not bigger?","directed":null,"U":"why is not bigger?","FIG":"lit","speaker":"*CHI:"},{"index":609,"Stimuli":"*CHI: go up me [= Make me go up].","directed":null,"U":"go up me [= Make me go up].","FIG":"lit","speaker":"*CHI:"},{"index":610,"Stimuli":"*CHI: Mark is this years older and I'm this years old.","directed":null,"U":"Mark is this years older and I'm this years old.","FIG":"lit","speaker":"*CHI:"},{"index":611,"Stimuli":"*CHI: somebody said me not to drive my car.","directed":null,"U":"somebody said me not to drive my car.","FIG":"lit","speaker":"*CHI:"},{"index":612,"Stimuli":"*CHI: somebody said not to me to drive my car.","directed":null,"U":"somebody said not to me to drive my car.","FIG":"lit","speaker":"*CHI:"},{"index":613,"Stimuli":"*MOT: who's going to drive your car?","directed":null,"U":"who's going to drive your car?","FIG":"lit","speaker":"*MOT:"},{"index":614,"Stimuli":"*CHI: the ghost said.","directed":"child-produced","U":"the ghost said.","FIG":"fig","speaker":"*CHI:"},{"index":615,"Stimuli":"*MOT: are you going to?","directed":null,"U":"are you going to?","FIG":"lit","speaker":"*MOT:"},{"index":616,"Stimuli":"*MOT: are you going to help the ghost drive the car?","directed":"child-directed","U":"are you going to help the ghost drive the car?","FIG":"fig","speaker":"*MOT:"},{"index":617,"Stimuli":"*CHI: yeah.","directed":null,"U":"yeah.","FIG":"lit","speaker":"*CHI:"},{"index":618,"Stimuli":"*MOT: would you like to go do that?","directed":null,"U":"would you like to go do that?","FIG":"lit","speaker":"*MOT:"},{"index":619,"Stimuli":"*CHI: okay.","directed":null,"U":"okay.","FIG":"lit","speaker":"*CHI:"},{"index":620,"Stimuli":"*MOT: okay.","directed":null,"U":"okay.","FIG":"lit","speaker":"*MOT:"},{"index":621,"Stimuli":"*CHI: I can't drive it.","directed":null,"U":"I can't drive it.","FIG":"lit","speaker":"*CHI:"},{"index":622,"Stimuli":"*MOT: why not?","directed":null,"U":"why not?","FIG":"lit","speaker":"*MOT:"}];
var c18 = [{"index":543,"Stimuli":"*FAT: did you think I was saying fruit?","directed":null,"U":"did you think I was saying fruit?","FIG":"lit","speaker":"*FAT:"},{"index":544,"Stimuli":"*CHI: no.","directed":null,"U":"no.","FIG":"lit","speaker":"*CHI:"},{"index":545,"Stimuli":"*CHI: if you tell my mom I'm going to get mad at you.","directed":null,"U":"if you tell my mom I'm going to get mad at you.","FIG":"lit","speaker":"*CHI:"},{"index":546,"Stimuli":"*CHI: if you tell my mom I'm going to get really mad at you.","directed":"child-produced","U":"if you tell my mom I'm going to get really mad at you.","FIG":"fig","speaker":"*CHI:"},{"index":547,"Stimuli":"*CHI: I'm going to get really really mad and I can get mad at my Daddy.","directed":"child-produced","U":"I'm going to get really really mad and I can get mad at my Daddy.","FIG":"fig","speaker":"*CHI:"},{"index":548,"Stimuli":"*CHI: can I have a mustache like you?","directed":null,"U":"can I have a mustache like you?","FIG":"lit","speaker":"*CHI:"},{"index":549,"Stimuli":"*CHI: two little birds sitting on a hill.","directed":null,"U":"two little birds sitting on a hill.","FIG":"lit","speaker":"*CHI:"},{"index":550,"Stimuli":"*CHI: one named Jack. one named Jill.","directed":null,"U":"one named Jack. one named Jill.","FIG":"lit","speaker":"*CHI:"},{"index":551,"Stimuli":"*CHI: fly away Jack. fly away Jill.","directed":null,"U":"fly away Jack. fly away Jill.","FIG":"lit","speaker":"*CHI:"},{"index":552,"Stimuli":"*CHI: come back Jack.","directed":null,"U":"come back Jack.","FIG":"lit","speaker":"*CHI:"},{"index":553,"Stimuli":"*CHI: come back Jill.","directed":null,"U":"come back Jill.","FIG":"lit","speaker":"*CHI:"},{"index":554,"Stimuli":"*FAT: Ross. do you want to do the Night Before Christmas?","directed":null,"U":"Ross. do you want to do the Night Before Christmas?","FIG":"lit","speaker":"*FAT:"},{"index":555,"Stimuli":"*CHI: yeah.","directed":null,"U":"yeah.","FIG":"lit","speaker":"*CHI:"},{"index":556,"Stimuli":"*FAT: okay.","directed":null,"U":"okay.","FIG":"lit","speaker":"*FAT:"},{"index":557,"Stimuli":"*CHI: the night before Christmas and all through the house.","directed":null,"U":"the night before Christmas and all through the house.","FIG":"lit","speaker":"*CHI:"},{"index":558,"Stimuli":"*CHI: not a creature was stirring. not even a mouse.","directed":"child-produced","U":"not a creature was stirring. not even a mouse.","FIG":"fig","speaker":"*CHI:"},{"index":559,"Stimuli":"*CHI: and the stockings were hung by the chimney.","directed":null,"U":"and the stockings were hung by the chimney.","FIG":"lit","speaker":"*CHI:"},{"index":560,"Stimuli":"*FAT: with care.","directed":null,"U":"with care.","FIG":"lit","speaker":"*FAT:"},{"index":561,"Stimuli":"*CHI: with care.","directed":null,"U":"with care.","FIG":"lit","speaker":"*CHI:"},{"index":562,"Stimuli":"*CHI: in hopes that Saint_Nick would soon would be there.","directed":null,"U":"in hopes that Saint_Nick would soon would be there.","FIG":"lit","speaker":"*CHI:"}];
var c19 = [{"index":643,"Stimuli":"*CHI: I'm just is.","directed":null,"U":"I'm just is.","FIG":"lit","speaker":"*CHI:"},{"index":644,"Stimuli":"*CHI: I said I just is.","directed":null,"U":"I said I just is.","FIG":"lit","speaker":"*CHI:"},{"index":645,"Stimuli":"*FAT: right.","directed":null,"U":"right.","FIG":"lit","speaker":"*FAT:"},{"index":646,"Stimuli":"*CHI: can I see my map?","directed":null,"U":"can I see my map?","FIG":"lit","speaker":"*CHI:"},{"index":647,"Stimuli":"*FAT: yeah.","directed":null,"U":"yeah.","FIG":"lit","speaker":"*FAT:"},{"index":648,"Stimuli":"*CHI: can I have it too?","directed":null,"U":"can I have it too?","FIG":"lit","speaker":"*CHI:"},{"index":649,"Stimuli":"*FAT: yeah.","directed":null,"U":"yeah.","FIG":"lit","speaker":"*FAT:"},{"index":650,"Stimuli":"*CHI: I get to keep it forever and forever?","directed":"child-produced","U":"I get to keep it forever and forever?","FIG":"fig","speaker":"*CHI:"},{"index":651,"Stimuli":"*CHI: my baby calls Mark. not muppet.","directed":null,"U":"my baby calls Mark. not muppet.","FIG":"lit","speaker":"*CHI:"},{"index":652,"Stimuli":"*CHI: buckle my baby brother in tight.","directed":null,"U":"buckle my baby brother in tight.","FIG":"lit","speaker":"*CHI:"},{"index":653,"Stimuli":"*CHI: Marky's going to be a hulk. and you're going to be a hulk. and I'm going to be a hulk too. so we can watch The_Hulk.","directed":"child-produced","U":"Marky's going to be a hulk. and you're going to be a hulk. and I'm going to be a hulk too. so we can watch The_Hulk.","FIG":"fig","speaker":"*CHI:"},{"index":654,"Stimuli":"*CHI: what them from?","directed":null,"U":"what them from?","FIG":"lit","speaker":"*CHI:"},{"index":655,"Stimuli":"*CHI: where you get them from?","directed":null,"U":"where you get them from?","FIG":"lit","speaker":"*CHI:"},{"index":656,"Stimuli":"*CHI: where do you get the pictures from?","directed":null,"U":"where do you get the pictures from?","FIG":"lit","speaker":"*CHI:"},{"index":657,"Stimuli":"*FAT: I'm not going to tell you. Ross.","directed":null,"U":"I'm not going to tell you. Ross.","FIG":"lit","speaker":"*FAT:"},{"index":658,"Stimuli":"*CHI: what?","directed":null,"U":"what?","FIG":"lit","speaker":"*CHI:"},{"index":659,"Stimuli":"*FAT: I'm not going to tell you where I get the pictures from.","directed":null,"U":"I'm not going to tell you where I get the pictures from.","FIG":"lit","speaker":"*FAT:"},{"index":660,"Stimuli":"*CHI: those are my cowboy boots and I go ride on a big horse.","directed":null,"U":"those are my cowboy boots and I go ride on a big horse.","FIG":"lit","speaker":"*CHI:"},{"index":661,"Stimuli":"*CHI: here. here are my boots.","directed":null,"U":"here. here are my boots.","FIG":"lit","speaker":"*CHI:"},{"index":662,"Stimuli":"*FAT: does it hurt?","directed":null,"U":"does it hurt?","FIG":"lit","speaker":"*FAT:"}];
var c20 = [{"index":1003,"Stimuli":"*FAT: don't burn your finger.","directed":null,"U":"don't burn your finger.","FIG":"lit","speaker":"*FAT:"},{"index":1004,"Stimuli":"*CHI: it's hot now.","directed":null,"U":"it's hot now.","FIG":"lit","speaker":"*CHI:"},{"index":1005,"Stimuli":"*FAT: is it?","directed":null,"U":"is it?","FIG":"lit","speaker":"*FAT:"},{"index":1006,"Stimuli":"*CHI: I'm going to turn on the cold button.","directed":null,"U":"I'm going to turn on the cold button.","FIG":"lit","speaker":"*CHI:"},{"index":1007,"Stimuli":"*FAT: okay.","directed":null,"U":"okay.","FIG":"lit","speaker":"*FAT:"},{"index":1008,"Stimuli":"*CHI: I'm going to put the other hot button up.","directed":null,"U":"I'm going to put the other hot button up.","FIG":"lit","speaker":"*CHI:"},{"index":1009,"Stimuli":"*FAT: okay.","directed":null,"U":"okay.","FIG":"lit","speaker":"*FAT:"},{"index":1010,"Stimuli":"*FAT: now what's happening?","directed":null,"U":"now what's happening?","FIG":"lit","speaker":"*FAT:"},{"index":1011,"Stimuli":"*CHI: I'm gonna turn on the cold button.","directed":null,"U":"I'm gonna turn on the cold button.","FIG":"lit","speaker":"*CHI:"},{"index":1012,"Stimuli":"*FAT: okay.","directed":null,"U":"okay.","FIG":"lit","speaker":"*FAT:"},{"index":1013,"Stimuli":"*CHI: pssssss@o I put on the cold button there because [\/\/] it's ready now.","directed":null,"U":"pssssss@o I put on the cold button there because [\/\/] it's ready now.","FIG":"lit","speaker":"*CHI:"},{"index":1014,"Stimuli":"*FAT: was that the water or was that the oven?","directed":null,"U":"was that the water or was that the oven?","FIG":"lit","speaker":"*FAT:"},{"index":1015,"Stimuli":"*CHI: that was the oven.","directed":null,"U":"that was the oven.","FIG":"lit","speaker":"*CHI:"},{"index":1016,"Stimuli":"*CHI: it's still not ready.","directed":null,"U":"it's still not ready.","FIG":"lit","speaker":"*CHI:"},{"index":1017,"Stimuli":"*CHI: I have_to turn on the baby. I have_to turn on the cold baby button on.","directed":null,"U":"I have_to turn on the baby. I have_to turn on the cold baby button on.","FIG":"lit","speaker":"*CHI:"},{"index":1018,"Stimuli":"*CHI: I put on the cold baby button on there so it will be ready now.","directed":"child-produced","U":"I put on the cold baby button on there so it will be ready now.","FIG":"fig","speaker":"*CHI:"},{"index":1019,"Stimuli":"*CHI: and the spoon went in there.","directed":null,"U":"and the spoon went in there.","FIG":"lit","speaker":"*CHI:"},{"index":1020,"Stimuli":"*CHI: we're ready for our dinner.","directed":null,"U":"we're ready for our dinner.","FIG":"lit","speaker":"*CHI:"},{"index":1021,"Stimuli":"*CHI: you have some first.","directed":null,"U":"you have some first.","FIG":"lit","speaker":"*CHI:"},{"index":1022,"Stimuli":"*FAT: mm:. very good.","directed":null,"U":"mm:. very good.","FIG":"lit","speaker":"*FAT:"}];/////////////////////////// dynamically add rows /////////////////////
function addRow(sentence, rowN, table)
{
  var tablebBody = document.getElementById(table).getElementsByTagName('tbody')[0];
  var newRow = tablebBody.insertRow(tablebBody.rows.length);
  var figCell = newRow.insertCell(0);
  var litCell = newRow.insertCell(1);
  var unkCell = newRow.insertCell(2);
  var sentCell = newRow.insertCell(3);
  
  var figButton = document.createElement('input');
  figButton.type = "radio";
  figButton.name = "fig"+rowN;
  figButton.value = "value";
  figButton.id = "fig";
  figCell.appendChild(figButton)

  var litButton = document.createElement('input');
  litButton.type = "radio";
  litButton.name = "fig"+rowN;
  litButton.value = "value";
  litButton.id = "lit";
  litCell.appendChild(litButton)

  var unkButton = document.createElement('input');
  unkButton.type = "radio";
  unkButton.name = "fig"+rowN;
  unkButton.value = "value";
  unkButton.id = "unk";
  unkButton.checked=true;
  unkCell.appendChild(unkButton)
  
  var sentenceText = document.createTextNode(sentence);
  sentCell.appendChild(sentenceText);
}

/// updated get value function ///
function collectVals(rownames, speaker, direction, lit, table){
  var outputs = [];
  var tlen = document.getElementById(table).rows.length;
  for (var i=0, ilen=tlen-1; i<ilen; i++){
    var namedElement = 'fig' + rownames[i];
    var radios = document.getElementsByName(namedElement);
    var sel = 'blank';
    for (var j=0, jlen=3; j<jlen; j++){
      if (radios[j].checked){
        sel = radios[j].id;
        break;
      }
    }
    outputs.push({"row": rownames[i], "selection": sel, "speaker": speaker[i], "child-directed": direction[i], "ground-truth": lit[i]})
  }

  return outputs;
}



/////////////////////////////////////////////////////////////////////////
///////////////////////// ORIGINAL TEMPLATE /////////////////////////////
/////////////////////////////////////////////////////////////////////////

var t1, t2;

function progress(){
  var trial = exp.data_trials.length/2;
	var pct = Math.round(100*(trial + exp.slideIndex+1)/(exp.nQs+1));
	$('.progress-bar').css('width', pct+'%').attr('aria-valuenow', pct);
}

function make_slides(f) {
  var   slides = {};

  slides.i0 = slide({
     name : "i0",
     start: function() {
      exp.startT = Date.now();
     }
  });

  slides.instructions1 = slide({
    name : "instructions1",
    button : function() {
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });

  slides.instructions2 = slide({
    //What we need is to basically set this up to be a repeat of the multi_slider
    //   slide, such that it handles everything the exact same, down to warnings and 
    //   button.push().
    //To do this, add a fake csv/json file that has examples like Lisa proposed to test
    //   comprehension--e1. It need only be SHORTER or THE SAME LENGTH as the other
    //   corpus entries.
    name : "instructions2",
    button : function() {
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });

  slides.instructions_example = slide({
    //What we need is to basically set this up to be a repeat of the multi_slider
    //   slide, such that it handles everything the exact same, down to warnings and 
    //   button.push().
    //To do this, add a fake csv/json file that has examples like Lisa proposed to test
    //   comprehension--e1. It need only be SHORTER or THE SAME LENGTH as the other
    //   corpus entries.
    name : "instructions_example",
    button : function() {
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });

  slides.instructions_example_test = slide({
    name : "instructions_example_test",
    present : [e],
    data: [],
    rownames: [],
    literalness: [],
    speakers: [],
    directed_at: [],
    
    present_handle : function(stim) {
      t1 = new Date();
      var rows = [];
      var speaker =[]
      var directed_to = []
      var literality = []
      progress();
      //Clear the table here . . . by deleting all rows (tr)  
      $("#exTable tbody tr").remove();
      //document.getElementById('#dataTable tbody').innerHTML = '';
      $(".err").hide();
      
      stim.forEach(function(st){
        addRow(st.Stimuli, st.index, "exTable"); 
        rows.push(st.index);
        speaker.push(st.speaker);
        directed_to.push(st.directed);
        literality.push(st.FIG)
      });
      this.rownames = rows;
      this.speakers = speaker;
      this.directed_at = directed_to;
      this.stim = stim;
      this.literalness = literality;
    },

    button : function() {
      var ok_to_go_on = 0
      this.data = collectVals(this.rownames, this.speakers, this.directed_at, this.literalness, "exTable")
      for (var i=0; i<this.data.length; i++) {
        if (this.data[i].selection=='blank'){
          console.log(this.data[i].selection)
          ok_to_go_on++
        }
      }
      console.log(ok_to_go_on)
      if (ok_to_go_on == 0) {
           this.log_responses();
           _stream.apply(this);
          } else {
           $(".err").show();
          }
    },

   // button : function() {
    //   if (exp.sliderPost.length < this.n_sliders) {
    //     $(".err").show();
    //   } else {
    //     this.log_responses();
    //     _stream.apply(this); //use _stream.apply(this); if and only if there is "present" data.
    //   }
    // },

    init_sliders : function(sentence_types) {
      for (var i=0; i<sentence_types.length; i++) {
        var sentence_type = sentence_types[i];
        utils.make_slider("#slider" + i, this.make_slider_callback(i));
      }
    },
    make_slider_callback : function(i) {
      return function(event, ui) {
        exp.sliderPost[i] = ui.value;
      };
    },
    
    log_responses : function() {
      t2 = new Date();
      exp.data_trials.push({
        "stim" : "pre-test",
        "response" : this.data
      });
    },
  });


  slides.instructions3 = slide({
    //What we need is to basically set this up to be a repeat of the multi_slider
    //   slide, such that it handles everything the exact same, down to warnings and 
    //   button.push().
    //To do this, add a fake csv/json file that has examples like Lisa proposed to test
    //   comprehension--e1. It need only be SHORTER or THE SAME LENGTH as the other
    //   corpus entries.
    name : "instructions3",
    button : function() {
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });

  exp.condition = _.sample(["control", "mixed", "mixed"])


  slides.subj_info =  slide({
    name : "subj_info",
    submit : function(e){
      //if (e.preventDefault) e.preventDefault(); // I don't know what this means.
      exp.subj_data = {
        language : $("#language").val(),
        enjoyment : $("#enjoyment").val(),
        asses : $('input[name="assess"]:checked').val(),
        age : $("#age").val(),
        gender : $("#gender").val(),
        education : $("#education").val(),
        comments : $("#comments").val(),
        // problems: $("#problems").val(),
        // fairprice: $("#fairprice").val()
      };
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });

  slides.multi_slider = slide({
    name : "multi_slider",
    present : [c1, c2, c3],
    data: [],
    rownames: [],
    literalness: [],
    speakers: [],
    directed_at: [],
    
    present_handle : function(stim) {
      t1 = new Date();
      var rows = [];
      var speaker =[]
      var directed_to = []
      var literality = []
      progress();
      //Clear the table here . . . by deleting all rows (tr)  
      $("#dataTable tbody tr").remove();
      //document.getElementById('#dataTable tbody').innerHTML = '';
      $(".err").hide();
      
      stim.forEach(function(st){
        addRow(st.Stimuli, st.index, "dataTable"); 
        rows.push(st.index);
        speaker.push(st.speaker);
        directed_to.push(st.directed);
        literality.push(st.FIG)
      });
      this.rownames = rows;
      this.speakers = speaker;
      this.directed_at = directed_to;
      this.stim = stim;
      this.literalness = literality;
    },

    button : function() {
      var ok_to_go_on = 0
      this.data = collectVals(this.rownames, this.speakers, this.directed_at, this.literalness, "dataTable")
      for (var i=0; i<this.data.length; i++) {
        if (this.data[i].selection=='blank'){
          console.log(this.data[i].selection)
          ok_to_go_on++
        }
      }
      console.log(ok_to_go_on)
      if (ok_to_go_on == 0) {
           this.log_responses();
           _stream.apply(this);
          } else {
           $(".err").show();
          }
    },

    // button : function() {
    //   if (exp.sliderPost.length < this.n_sliders) {
    //     $(".err").show();
    //   } else {
    //     this.log_responses();
    //     _stream.apply(this); //use _stream.apply(this); if and only if there is "present" data.
    //   }
    // },

    init_sliders : function(sentence_types) {
      for (var i=0; i<sentence_types.length; i++) {
        var sentence_type = sentence_types[i];
        utils.make_slider("#slider" + i, this.make_slider_callback(i));
      }
    },
    make_slider_callback : function(i) {
      return function(event, ui) {
        exp.sliderPost[i] = ui.value;
      };
    },
    
    log_responses : function() {
      t2 = new Date();
      exp.data_trials.push({
        "stim" : "data",
        "response" : this.data
      });
    },
  });

  slides.subj_info =  slide({
    name : "subj_info",
    submit : function(e){
      //if (e.preventDefault) e.preventDefault(); // I don't know what this means.
      exp.subj_data = {
        language : $("#language").val(),
        enjoyment : $("#enjoyment").val(),
        asses : $('input[name="assess"]:checked').val(),
        age : $("#age").val(),
        gender : $("#gender").val(),
        education : $("#education").val(),
        comments : $("#comments").val(),
        // problems: $("#problems").val(),
        // fairprice: $("#fairprice").val()
      };
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });

  slides.thanks = slide({
    name : "thanks",
    start : function() {
      exp.data= {
          "trials" : exp.data_trials,
          // "catch_trials" : exp.catch_trials,
          "system" : exp.system,
          // "condition" : exp.condition,
          "subject_information" : exp.subj_data,
          "time_in_minutes" : (Date.now() - exp.startT)/60000
      };
      setTimeout(function() {proliferate.submit(exp.data);}, 1000);
      //setTimeout(function() {turk.submit(exp.data);}, 1000);
    }
  });

  return slides;
}

/// init ///
function init() {
  repeatWorker = false;
  (function(){
    var ut_id = "intonation-ambiguity-20200406";
    if (UTWorkerLimitReached(ut_id)) {
      $('.slide').empty();
      repeatWorker = true;
      alert("You have already completed the maximum number of HITs allowed by this requester. For technical reasons we publish experiments in multiple groups. Please click 'Return HIT' to avoid any impact on your approval rating.");
    }
  })();

  exp.trials = [];
  exp.catch_trials = [];
  exp.system = {
      Browser : BrowserDetect.browser,
      OS : BrowserDetect.OS,
      screenH: screen.height,
      screenUH: exp.height,
      screenW: screen.width,
      screenUW: exp.width
    };

  //exp.structure=["i0", "instructions1", "instructions2", "multi_slider", 'subj_info', 'thanks'];
  exp.structure=["i0", "instructions1", "instructions_example", "instructions_example_test", "instructions3",  "multi_slider", 'subj_info', 'thanks'];
  //exp.structure=["i0", "instructions1",  "multi_slider", 'subj_info', 'thanks'];

  exp.data_trials = [];

  exp.slides = make_slides(exp);

  exp.nQs = utils.get_exp_length(); //this does not work if there are stacks of stims (but does work for an experiment with this structure)
                    //relies on structure and slides being defined

  $('.slide').hide(); //hide everything

  //make sure turkers have accepted HIT (or you're not in mturk)
  $("#start_button").click(function() {
    if (turk.previewMode) {
      $("#mustaccept").show();
    } else {
      $("#start_button").click(function() {$("#mustaccept").show();});
      exp.go();
    }
  });

  exp.go(); //show first slide
}
