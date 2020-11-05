var old = [[
  {index: "1", Stimuli: "The horse raced past the barn fell."}, 
  {index: "2",Stimuli: "there will be no cow level."},
  {index: "3",Stimuli: "The horse raced past the barn fell."}, 
  {index: "4",Stimuli: "there will be no cow level."},
  {index: "5",Stimuli: "The horse raced past the barn fell."}, 
  {index: "6",Stimuli: "there will be no cow level."},
  {index: "7",Stimuli: "The horse raced past the barn fell."}, 
  {index: "8",Stimuli: "there will be no cow level."},
  {index: "9",Stimuli: "The horse raced past the barn fell."}, 
  {index: "10",Stimuli: "there will be no cow level."},
  {index: "11",Stimuli: "The horse raced past the barn fell."}, 
  {index: "12",Stimuli: "there will be no cow level."},
  {index: "13",Stimuli: "The horse raced past the barn fell."}, 
  {index: "14",Stimuli: "there will be no cow level."},
  {index: "15",Stimuli: "The horse raced past the barn fell."}, 
  {index: "16",Stimuli: "there will be no cow level."},
  {index: "17",Stimuli: "The horse raced past the barn fell."}, 
  {index: "18",Stimuli: "there will be no cow level."},
  {index: "19",Stimuli: "The horse raced past the barn fell."}, 
  {index: "20",Stimuli: "there will be no cow level."},
  {index: "21",Stimuli: "The horse raced past the barn fell."}, 
  {index: "22",Stimuli: "there will be no cow level."}
], 
  [
    {index: "1", Stimuli: "this is not a pipe."}, 
    {index: "2",Stimuli: "there will be no cow level."},
    {index: "3",Stimuli: "this is not a pipe."}, 
    {index: "4",Stimuli: "there will be no cow level."},
    {index: "5",Stimuli: "The horse raced past the barn fell."}, 
    {index: "6",Stimuli: "there will be no cow level."},
    {index: "7",Stimuli: "The horse raced past the barn fell."}, 
    {index: "8",Stimuli: "there will be no cow level."},
    {index: "9",Stimuli: "The horse raced past the barn fell."}, 
    {index: "10",Stimuli: "there will be no cow level."},
    {index: "11",Stimuli: "The horse raced past the barn fell."}, 
    {index: "12",Stimuli: "there will be no cow level."},
    {index: "13",Stimuli: "The horse raced past the barn fell."}, 
    {index: "14",Stimuli: "there will be no cow level."},
    {index: "15",Stimuli: "The horse raced past the barn fell."}, 
    {index: "16",Stimuli: "there will be no cow level."},
    {index: "17",Stimuli: "The horse raced past the barn fell."}, 
    {index: "18",Stimuli: "there will be no cow level."},
    {index: "19",Stimuli: "The horse raced past the barn fell."}, 
    {index: "20",Stimuli: "there will be no cow level."},
    {index: "21",Stimuli: "The horse raced past the barn fell."}, 
    {index: "22",Stimuli: "there will be no cow level."}
  ]
];

var corpus1 = [{"index":1,"Non-literal":"literal","Stimuli":"*CHI: they weren't able to sleep."},{"index":2,"Non-literal":"counterfactual","Stimuli":"*CHI: we're going to see them next year when they wake up."},{"index":3,"Non-literal":"literal","Stimuli":"*CHI: did you come here when you was a little baby?"},{"index":4,"Non-literal":"literal","Stimuli":"*CHI: do you got the right money?"},{"index":5,"Non-literal":"literal","Stimuli":"*CHI: I want to go poo."},{"index":6,"Non-literal":"literal","Stimuli":"*CHI: actually I don't want to go poo because I want to make a snowman."},{"index":7,"Non-literal":"literal","Stimuli":"*CHI: I jumped over it."},{"index":8,"Non-literal":"literal","Stimuli":"*CHI: we're locked and closed."},{"index":9,"Non-literal":"literal","Stimuli":"*CHI: papa. we forgot to go ice skate."},{"index":10,"Non-literal":"literal","Stimuli":"*FAT: we forgot to go ice skating?"},{"index":11,"Non-literal":"literal","Stimuli":"*CHI: yeah."},{"index":12,"Non-literal":"literal","Stimuli":"*FAT: why?"},{"index":13,"Non-literal":"literal","Stimuli":"*FAT: what were we going to do there?"},{"index":14,"Non-literal":"literal","Stimuli":"*CHI: we forgot to go like that."},{"index":15,"Non-literal":"literal","Stimuli":"*FAT: oh. we did?"},{"index":16,"Non-literal":"literal","Stimuli":"*CHI: yeah."},{"index":17,"Non-literal":"literal","Stimuli":"*FAT: oh. you're right."},{"index":18,"Non-literal":"literal","Stimuli":"*FAT: did Marky come with us?"},{"index":19,"Non-literal":"literal","Stimuli":"*CHI: no."},{"index":20,"Non-literal":"literal","Stimuli":"*FAT: why did we forget to take Marky?"},{"index":21,"Non-literal":"literal","Stimuli":"*CHI: no."},{"index":22,"Non-literal":"literal","Stimuli":"*FAT: but why did we forget to take Marky?"},{"index":23,"Non-literal":"literal","Stimuli":"*CHI: because he get sick."},{"index":24,"Non-literal":"literal","Stimuli":"*FAT: I want him next time."},{"index":25,"Non-literal":"literal","Stimuli":"*CHI: okay."},{"index":26,"Non-literal":"literal","Stimuli":"*FAT: how about you?"},{"index":27,"Non-literal":"literal","Stimuli":"*FAT: do you want him?"}];
var corpus2 = [{"index":36,"Non-literal":"literal","Stimuli":"*CHI: he's apart."},{"index":37,"Non-literal":"literal","Stimuli":"*FAT: open it up."},{"index":38,"Non-literal":"literal","Stimuli":"*FAT: open it up."},{"index":39,"Non-literal":"literal","Stimuli":"*FAT: now. what does he do?"},{"index":40,"Non-literal":"counterfactual","Stimuli":"*CHI: he broke that man."},{"index":41,"Non-literal":"literal","Stimuli":"*FAT: yeah. because the man was bad. what else."},{"index":42,"Non-literal":"literal","Stimuli":"*FAT: what is he saying?"},{"index":43,"Non-literal":"literal","Stimuli":"*FAT: what is the Hulk saying?"},{"index":44,"Non-literal":"literal","Stimuli":"*CHI: he say rrraar@o!."},{"index":45,"Non-literal":"literal","Stimuli":"*CHI: rrraar@o!."}];
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
function collectVals(){
  var outputs = [];
  var tlen = document.getElementById('dataTable').rows.length;
  for (var i=0, ilen=tlen-1; i<ilen; i++){
    var namedElement = 'fig' + (i+1);
    var radios = document.getElementsByName(namedElement);
    var sel = 'blank';
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
    present:  [corpus1],
    //present: _.sample(exp.stims), //every element in exp.stims is passed to present_handle one by one as 'stim'

    present_handle : function(stim) {
      console.log(stim);
      //Clear the table here . . . by deleting all rows (tr)  
      $("#dataTable tbody tr").remove();
      //document.getElementById('#dataTable tbody').innerHTML = '';
      $(".err").hide();
      

    
      //addrow goes here somewhere . . .
      //console.log(stim); 
      stim.forEach(function(st){addRow(st.Stimuli, st.index)});
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

    /// data formatting option 1: {line: 123, Stimuli: "sentence", speaker: speaker: "whoever", response: "XXX"}, . . . 
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
    [{index: "1", Stimuli: "The horse raced past the barn fell."}, 
      {index: "2",Stimuli: "there will be no cow level."},
      {index: "3",Stimuli: "The horse raced past the barn fell."}, 
      {index: "4",Stimuli: "there will be no cow level."},
      {index: "5",Stimuli: "The horse raced past the barn fell."}, 
      {index: "6",Stimuli: "there will be no cow level."},
      {index: "7",Stimuli: "The horse raced past the barn fell."}, 
      {index: "8",Stimuli: "there will be no cow level."},
      {index: "9",Stimuli: "The horse raced past the barn fell."}, 
      {index: "10",Stimuli: "there will be no cow level."},
      {index: "11",Stimuli: "The horse raced past the barn fell."}, 
      {index: "12",Stimuli: "there will be no cow level."},
      {index: "13",Stimuli: "The horse raced past the barn fell."}, 
      {index: "14",Stimuli: "there will be no cow level."},
      {index: "15",Stimuli: "The horse raced past the barn fell."}, 
      {index: "16",Stimuli: "there will be no cow level."},
      {index: "17",Stimuli: "The horse raced past the barn fell."}, 
      {index: "18",Stimuli: "there will be no cow level."},
      {index: "19",Stimuli: "The horse raced past the barn fell."}, 
      {index: "20",Stimuli: "there will be no cow level."},
      {index: "21",Stimuli: "The horse raced past the barn fell."}, 
      {index: "22",Stimuli: "there will be no cow level."}], 
    [{index: "1", Stimuli: "this is not a pipe."}, 
      {index: "2",Stimuli: "there will be no cow level."},
      {index: "3",Stimuli: "this is not a pipe."}, 
      {index: "4",Stimuli: "there will be no cow level."},
      {index: "5",Stimuli: "this is not a pipe."}, 
      {index: "6",Stimuli: "there will be no cow level."},
      {index: "7",Stimuli: "this is not a pipe."}, 
      {index: "8",Stimuli: "there will be no cow level."},
      {index: "9",Stimuli: "this is not a pipe."}, 
      {index: "10",Stimuli: "there will be no cow level."},
      {index: "11",Stimuli: "this is not a pipe."}, 
      {index: "12",Stimuli: "there will be no cow level."},
      {index: "13",Stimuli: "this is not a pipe."}, 
      {index: "14",Stimuli: "there will be no cow level."},
      {index: "15",Stimuli: "this is not a pipe."}, 
      {index: "16",Stimuli: "there will be no cow level."},
      {index: "17",Stimuli: "this is not a pipe."}, 
      {index: "18",Stimuli: "this is not a pipe."},
      {index: "19",Stimuli: "this is not a pipe."}, 
      {index: "20",Stimuli: "there will be no cow level."},
      {index: "21",Stimuli: "this is not a pipe."}, 
      {index: "22",Stimuli: "there will be no cow level."}]
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
