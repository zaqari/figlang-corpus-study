/////////////////////////////////////////////////////////////////////////
/////////////////////// REDOING THE TEMPLATE ////////////////////////////
/////////////////////////////////////////////////////////////////////////



////////////////////BEGIN APPENDED TEMPLATE CODE/////////////////////////
var all_items_filled = false;
var corpus1 = [{"index":1,"Non-literal":"literal","Stimuli":"*CHI: they weren't able to sleep."},{"index":2,"Non-literal":"counterfactual","Stimuli":"*CHI: we're going to see them next year when they wake up."},{"index":3,"Non-literal":"literal","Stimuli":"*CHI: did you come here when you was a little baby?"},{"index":4,"Non-literal":"literal","Stimuli":"*CHI: do you got the right money?"},{"index":5,"Non-literal":"literal","Stimuli":"*CHI: I want to go poo."},{"index":6,"Non-literal":"literal","Stimuli":"*CHI: actually I don't want to go poo because I want to make a snowman."},{"index":7,"Non-literal":"literal","Stimuli":"*CHI: I jumped over it."},{"index":8,"Non-literal":"literal","Stimuli":"*CHI: we're locked and closed."},{"index":9,"Non-literal":"literal","Stimuli":"*CHI: papa. we forgot to go ice skate."},{"index":10,"Non-literal":"literal","Stimuli":"*FAT: we forgot to go ice skating?"},{"index":11,"Non-literal":"literal","Stimuli":"*CHI: yeah."},{"index":12,"Non-literal":"literal","Stimuli":"*FAT: why?"},{"index":13,"Non-literal":"literal","Stimuli":"*FAT: what were we going to do there?"},{"index":14,"Non-literal":"literal","Stimuli":"*CHI: we forgot to go like that."},{"index":15,"Non-literal":"literal","Stimuli":"*FAT: oh. we did?"},{"index":16,"Non-literal":"literal","Stimuli":"*CHI: yeah."},{"index":17,"Non-literal":"literal","Stimuli":"*FAT: oh. you're right."},{"index":18,"Non-literal":"literal","Stimuli":"*FAT: did Marky come with us?"},{"index":19,"Non-literal":"literal","Stimuli":"*CHI: no."},{"index":20,"Non-literal":"literal","Stimuli":"*FAT: why did we forget to take Marky?"},{"index":21,"Non-literal":"literal","Stimuli":"*CHI: no."},{"index":22,"Non-literal":"literal","Stimuli":"*FAT: but why did we forget to take Marky?"},{"index":23,"Non-literal":"literal","Stimuli":"*CHI: because he get sick."},{"index":24,"Non-literal":"literal","Stimuli":"*FAT: I want him next time."},{"index":25,"Non-literal":"literal","Stimuli":"*CHI: okay."},{"index":26,"Non-literal":"literal","Stimuli":"*FAT: how about you?"},{"index":27,"Non-literal":"literal","Stimuli":"*FAT: do you want him?"}];
var corpus2 = [{"index":36,"Non-literal":"literal","Stimuli":"*CHI: he's apart."},{"index":37,"Non-literal":"literal","Stimuli":"*FAT: open it up."},{"index":38,"Non-literal":"literal","Stimuli":"*FAT: open it up."}];
var corpus3 = [{"Non-literal":"literal","directed":null,"speaker":"*FAT:","U":"why ? \u0015","index":483,"Stimuli":"*FAT: why ? \u0015"},{"Non-literal":"literal","directed":null,"speaker":"*CHI:","U":"because I'm tired of you . \u0015","index":484,"Stimuli":"*CHI: because I'm tired of you . \u0015"},{"Non-literal":"hyperbole","directed":"child-directed","speaker":"*FAT:","U":"your drawings are wonderful . \u0015","index":485,"Stimuli":"*FAT: your drawings are wonderful . \u0015"},{"Non-literal":"literal","directed":null,"speaker":"*CHI:","U":"can I eat this cookie ? \u0015","index":486,"Stimuli":"*CHI: can I eat this cookie ? \u0015"},{"Non-literal":"literal","directed":null,"speaker":"*FAT:","U":"no (.) that's rocks . \u0015","index":487,"Stimuli":"*FAT: no (.) that's rocks . \u0015"},{"Non-literal":"literal","directed":null,"speaker":"*FAT:","U":"you can't eat that . \u0015","index":488,"Stimuli":"*FAT: you can't eat that . \u0015"},{"Non-literal":"literal","directed":null,"speaker":"*CHI:","U":"do you have a cookie that I can eat ? \u0015","index":489,"Stimuli":"*CHI: do you have a cookie that I can eat ? \u0015"},{"Non-literal":"literal","directed":null,"speaker":"*FAT:","U":"yeah (.) I've got one . \u0015","index":490,"Stimuli":"*FAT: yeah (.) I've got one . \u0015"},{"Non-literal":"literal","directed":null,"speaker":"*CHI:","U":"do you have a cookie for me to eat ? \u0015","index":491,"Stimuli":"*CHI: do you have a cookie for me to eat ? \u0015"},{"Non-literal":"hyperbole","directed":"child-produced","speaker":"*CHI:","U":"do you have a cookie to put on the big Christmas tree ? \u0015","index":492,"Stimuli":"*CHI: do you have a cookie to put on the big Christmas tree ? \u0015"},{"Non-literal":"literal","directed":null,"speaker":"*CHI:","U":"is my old baby blanket is clean ? \u0015","index":493,"Stimuli":"*CHI: is my old baby blanket is clean ? \u0015"},{"Non-literal":"counterfactual","directed":"child-produced","speaker":"*CHI:","U":"you be the broom and I'll be the witch and Marky'll be the black cat . \u0015","index":494,"Stimuli":"*CHI: you be the broom and I'll be the witch and Marky'll be the black cat . \u0015"},{"Non-literal":"counterfactual","directed":"child-produced","speaker":"*CHI:","U":"and I will be the witch . \u0015","index":495,"Stimuli":"*CHI: and I will be the witch . \u0015"},{"Non-literal":"counterfactual","directed":"child-produced","speaker":"*CHI:","U":"I got idea . \u0015","index":496,"Stimuli":"*CHI: I got idea . \u0015"},{"Non-literal":"counterfactual","directed":"child-produced","speaker":"*CHI:","U":"you be the witch and him be the black cat and you be the bat and I be the pumpkin . \u0015","index":497,"Stimuli":"*CHI: you be the witch and him be the black cat and you be the bat and I be the pumpkin . \u0015"},{"Non-literal":"literal","directed":null,"speaker":"*FAT:","U":"okay . \u0015","index":498,"Stimuli":"*FAT: okay . \u0015"},{"Non-literal":"literal","directed":null,"speaker":"*CHI:","U":"pum@o (.) pum@o (.) pum@o . \u0015","index":499,"Stimuli":"*CHI: pum@o (.) pum@o (.) pum@o . \u0015"},{"Non-literal":"literal","directed":null,"speaker":"*FAT:","U":"Ross (.) do you want to play with your lego ? \u0015","index":500,"Stimuli":"*FAT: Ross (.) do you want to play with your lego ? \u0015"},{"Non-literal":"literal","directed":null,"speaker":"*CHI:","U":"pum@o (.) pum@o (.) pum@o [= pumpkin sound] . \u0015","index":501,"Stimuli":"*CHI: pum@o (.) pum@o (.) pum@o [= pumpkin sound] . \u0015"},{"Non-literal":"literal","directed":null,"speaker":"*FAT:","U":"do you want to play with your lego ? \u0015","index":502,"Stimuli":"*FAT: do you want to play with your lego ? \u0015"},{"Non-literal":"counterfactual","directed":"child-produced","speaker":"*CHI:","U":"I'm a pumpkin . \u0015","index":503,"Stimuli":"*CHI: I'm a pumpkin . \u0015"}]
/// dynamically add rows ///
function addRow(sentence, rowN)
{
  var tablebBody = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
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
  unkCell.appendChild(unkButton)
  
  var sentenceText = document.createTextNode(sentence);
  sentCell.appendChild(sentenceText);
}

/// updated get value function ///
function collectVals(rownames, speaker, direction){
  var outputs = [];
  var tlen = document.getElementById('dataTable').rows.length;
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
    outputs.push({"row": rownames[i], "selection": sel, "speaker": speaker[i], "child-directed": direction[i]})
  }

  return outputs;
}


////////////////////BEGIN ACTUAL TEMPLATE CODE/////////////////////////
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
    name : "instructions2",
    button : function() {
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });

  exp.condition = _.sample(["control", "mixed", "mixed"])

  slides.multi_slider = slide({
    name : "multi_slider",
    present : [corpus3],
    data: [],
    rownames: [],
    speakers: [],
    directed_at: [],
    
    present_handle : function(stim) {
      t1 = new Date();
      var rows = [];
      var speaker =[]
      var directed_to = []
      progress();
      //Clear the table here . . . by deleting all rows (tr)  
      $("#dataTable tbody tr").remove();
      //document.getElementById('#dataTable tbody').innerHTML = '';
      $(".err").hide();
      
      stim.forEach(function(st){
        addRow(st.Stimuli, st.index); 
        rows.push(st.index);
        speaker.push(st.speaker);
        directed_to.push(st.directed)
      });
      this.rownames = rows;
      this.speakers = speaker;
      this.directed_at = directed_to;
      this.stim = stim;
    },

    button : function() {
      var ok_to_go_on = 0
      this.data = collectVals(this.rownames, this.speakers, this.directed_at)
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
        "stim" : this.stim.sentence,
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
      setTimeout(function() {turk.submit(exp.data);}, 1000);
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
  exp.structure=["i0", "multi_slider", 'subj_info', 'thanks'];

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
