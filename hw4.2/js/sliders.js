$( function() {
    // I created variables that set the parameters of each of the four
    // sliders that I use.
    var minColSliderOpts = {
        min: -50,
        max: 50,
        // updates the value of the input field
        slide: function(event, ui) {
            $("#minColVal").val(ui.value);
        }
    }

    var maxColSliderOpts = {
        min: -50,
        max: 50,
        slide: function(event, ui) {
            $("#maxColVal").val(ui.value);
        }
    }

    var minRowSliderOpts = {
        min: -50,
        max: 50,
        slide: function(event, ui) {
            $("#minRowVal").val(ui.value);
        }
    }

    var maxRowSliderOpts = {
        min: -50,
        max: 50,
        slide: function(event, ui) {
            $("#maxRowVal").val(ui.value);
        }
    }
    $("#minColSlider").slider(minColSliderOpts);
    $("#maxColSlider").slider(maxColSliderOpts);
    $("#minRowSlider").slider(minRowSliderOpts);
    $("#maxRowSlider").slider(maxRowSliderOpts);
    
    $("#minColVal").val($("#minColSlider").slider("value"));
    $("#maxColVal").val($("#maxColSlider").slider("value"));
    $("#minRowVal").val($("#minRowSlider").slider("value"));
    $("#maxRowVal").val($("#maxRowSlider").slider("value"));
  });