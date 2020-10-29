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
  unkButton.checked = true;
  unkCell.appendChild(unkButton)
  
  var sentenceText = document.createTextNode(sentence);
  sentCell.appendChild(sentenceText);
}

/// updated get value function ///
function collectVals(){
  var outputs = [];
  var tlen = document.getElementById('dataTable').rows.length;
  for (var i=0, ilen=tlen-1; i<ilen; i++){
    var namedElement = 'fig' + (i+1);
    var radios = document.getElementsByName(namedElement);
    var sel;
    for (var j=0, jlen=3; j<jlen; j++){
      if (radios[j].checked){
        sel = radios[j].id;
        break;
      }
    }
    outputs.push({"row": i+1, "selection": sel})
  }
  return outputs;
}


function make_slides(f) {
  var   slides = {};

  slides.i0 = slide({
    name : "i0",
    start: function() {
    exp.startT = Date.now();
    }
  });

  slides.instructions = slide({
    name : "instructions",
    button : function() {
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });

  slides.one_slider = slide({
    name : "one_slider",
    //tablerized: exp.stims.forEach(function(stim){addRow(stim.sentence, stim.row)}),
    //tablize: exp.stims.forEach(function(listItem)){addRow(listItem.sentence)},
    present:  [[
      {row: "1", sentence: "The horse raced past the barn fell."}, 
      {row: "2",sentence: "there will be no cow level."},
      {row: "3",sentence: "The horse raced past the barn fell."}, 
      {row: "4",sentence: "there will be no cow level."},
      {row: "5",sentence: "The horse raced past the barn fell."}, 
      {row: "6",sentence: "there will be no cow level."},
      {row: "7",sentence: "The horse raced past the barn fell."}, 
      {row: "8",sentence: "there will be no cow level."},
      {row: "9",sentence: "The horse raced past the barn fell."}, 
      {row: "10",sentence: "there will be no cow level."},
      {row: "11",sentence: "The horse raced past the barn fell."}, 
      {row: "12",sentence: "there will be no cow level."},
      {row: "13",sentence: "The horse raced past the barn fell."}, 
      {row: "14",sentence: "there will be no cow level."},
      {row: "15",sentence: "The horse raced past the barn fell."}, 
      {row: "16",sentence: "there will be no cow level."},
      {row: "17",sentence: "The horse raced past the barn fell."}, 
      {row: "18",sentence: "there will be no cow level."},
      {row: "19",sentence: "The horse raced past the barn fell."}, 
      {row: "20",sentence: "there will be no cow level."},
      {row: "21",sentence: "The horse raced past the barn fell."}, 
      {row: "22",sentence: "there will be no cow level."}
    ], 
      [
        {row: "1", sentence: "this is not a pipe."}, 
        {row: "2",sentence: "there will be no cow level."},
        {row: "3",sentence: "this is not a pipe."}, 
        {row: "4",sentence: "there will be no cow level."},
        {row: "5",sentence: "The horse raced past the barn fell."}, 
        {row: "6",sentence: "there will be no cow level."},
        {row: "7",sentence: "The horse raced past the barn fell."}, 
        {row: "8",sentence: "there will be no cow level."},
        {row: "9",sentence: "The horse raced past the barn fell."}, 
        {row: "10",sentence: "there will be no cow level."},
        {row: "11",sentence: "The horse raced past the barn fell."}, 
        {row: "12",sentence: "there will be no cow level."},
        {row: "13",sentence: "The horse raced past the barn fell."}, 
        {row: "14",sentence: "there will be no cow level."},
        {row: "15",sentence: "The horse raced past the barn fell."}, 
        {row: "16",sentence: "there will be no cow level."},
        {row: "17",sentence: "The horse raced past the barn fell."}, 
        {row: "18",sentence: "there will be no cow level."},
        {row: "19",sentence: "The horse raced past the barn fell."}, 
        {row: "20",sentence: "there will be no cow level."},
        {row: "21",sentence: "The horse raced past the barn fell."}, 
        {row: "22",sentence: "there will be no cow level."}
      ]
    ],
    //present: _.sample(exp.stims), //every element in exp.stims is passed to present_handle one by one as 'stim'

    present_handle : function(stim) {
      console.log(stim);
      //Clear the table here . . . by deleting all rows (tr)  
      $("#dataTable tbody tr").remove();
      //document.getElementById('#dataTable tbody').innerHTML = '';
      $(".err").hide();
      

    
      //addrow goes here somewhere . . .
      //console.log(stim); 
      stim.forEach(function(st){addRow(st.sentence, st.row)});
      this.stim = stim; // store this information in the slide so you can record it later
      $(".prompt").html(stim.sentence);

      //addRow(stim.sentence);

      this.init_sliders();
      exp.sliderPost = null; //erase current slider value
    },

    button : function() {
      // if (exp.sliderPost == null) {
      //   $(".err").show();
      // } else {
      { this.log_responses();

      /* use _stream.apply(this); if and only if there is
      "present" data. (and only *after* responses are logged) */
      _stream.apply(this);
      }
    },

    init_sliders : function() {
      utils.make_slider("#single_slider", function(event, ui) {
        exp.sliderPost = ui.value;
      });
    },

    /// data formatting option 1: {line: 123, sentence: "sentence", speaker: speaker: "whoever", response: "XXX"}, . . . 
    log_responses : function() {
    exp.data_trials.push({
        "stim" : this.stim.sentence,
        //"response" : exp.sliderPost,
        "response" : collectVals()
    });

    }
  });

  slides.subj_info =  slide({
    name : "subj_info",
    submit : function(e){
      exp.subj_data = {
        language : $("#language").val(),
        enjoyment : $("#enjoyment").val(),
        asses : $('input[name="assess"]:checked').val(),
        age : $("#age").val(),
        gender : $("#gender").val(),
        education : $("#education").val(),
        comments : $("#comments").val(),
        problems: $("#problems").val(),
        fairprice: $("#fairprice").val()
      };
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });

  slides.thanks = slide({
    name : "thanks",
    start : function() {
      exp.data= {
          "trials" : exp.data_trials,
          "catch_trials" : exp.catch_trials,
          "system" : exp.system,
          "condition" : exp.condition,
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
  exp.trials = [];
  exp.catch_trials = [];

  //exp.condition = _.sample(["condition1", "condition2"]);

  exp.stims =  [
    [{row: "1", sentence: "The horse raced past the barn fell."}, 
      {row: "2",sentence: "there will be no cow level."},
      {row: "3",sentence: "The horse raced past the barn fell."}, 
      {row: "4",sentence: "there will be no cow level."},
      {row: "5",sentence: "The horse raced past the barn fell."}, 
      {row: "6",sentence: "there will be no cow level."},
      {row: "7",sentence: "The horse raced past the barn fell."}, 
      {row: "8",sentence: "there will be no cow level."},
      {row: "9",sentence: "The horse raced past the barn fell."}, 
      {row: "10",sentence: "there will be no cow level."},
      {row: "11",sentence: "The horse raced past the barn fell."}, 
      {row: "12",sentence: "there will be no cow level."},
      {row: "13",sentence: "The horse raced past the barn fell."}, 
      {row: "14",sentence: "there will be no cow level."},
      {row: "15",sentence: "The horse raced past the barn fell."}, 
      {row: "16",sentence: "there will be no cow level."},
      {row: "17",sentence: "The horse raced past the barn fell."}, 
      {row: "18",sentence: "there will be no cow level."},
      {row: "19",sentence: "The horse raced past the barn fell."}, 
      {row: "20",sentence: "there will be no cow level."},
      {row: "21",sentence: "The horse raced past the barn fell."}, 
      {row: "22",sentence: "there will be no cow level."}], 
    [{row: "1", sentence: "this is not a pipe."}, 
      {row: "2",sentence: "there will be no cow level."},
      {row: "3",sentence: "this is not a pipe."}, 
      {row: "4",sentence: "there will be no cow level."},
      {row: "5",sentence: "this is not a pipe."}, 
      {row: "6",sentence: "there will be no cow level."},
      {row: "7",sentence: "this is not a pipe."}, 
      {row: "8",sentence: "there will be no cow level."},
      {row: "9",sentence: "this is not a pipe."}, 
      {row: "10",sentence: "there will be no cow level."},
      {row: "11",sentence: "this is not a pipe."}, 
      {row: "12",sentence: "there will be no cow level."},
      {row: "13",sentence: "this is not a pipe."}, 
      {row: "14",sentence: "there will be no cow level."},
      {row: "15",sentence: "this is not a pipe."}, 
      {row: "16",sentence: "there will be no cow level."},
      {row: "17",sentence: "this is not a pipe."}, 
      {row: "18",sentence: "this is not a pipe."},
      {row: "19",sentence: "this is not a pipe."}, 
      {row: "20",sentence: "there will be no cow level."},
      {row: "21",sentence: "this is not a pipe."}, 
      {row: "22",sentence: "there will be no cow level."}]
  ];

  exp.system = {
      Browser : BrowserDetect.browser,
      OS : BrowserDetect.OS,
      screenH: screen.height,
      screenUH: exp.height,
      screenW: screen.width,
      screenUW: exp.width
    };

  //blocks of the experiment:
  exp.structure=["i0", "instructions", "one_slider", 'subj_info', 'thanks'];

  exp.data_trials = [];
  //make corresponding slides:
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
