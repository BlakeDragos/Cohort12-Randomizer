$(document).ready(function() {
  let check = true;
  $('#switch').click(function() {
    if (check) {
      $('#fortune').css('display', 'inline');
      $('#normal').css('display', 'none');
      check = false;
    } else {
      $('#fortune').css('display', 'none');
      $('#normal').css('display', 'inline');
      check = true;
    }
  });

  let classroom;
  let current;
  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  if (localStorage.getItem('classroom') != null) {
    classroom = JSON.parse(localStorage.getItem('classroom'));
    current = parseInt(localStorage.getItem('current'));
    $('#random').hide();
    $('#student').text(classroom[current] + ': ' + (current + 1));
  } else {
    classroom = ["Abdirahman Adam","Amin Bashir","Amy Pastorius","Anna Fotis","Asli Farah","Ayubu Abdirahman","Bao Xiong","Betiel Mengesha","Brandon Norrgard","Bryan Thaoxaochay","Caitlin Collins","Calvin Jacobsen","Carolyn Hilpisch","Carter Venne","Chao SengSai Ly",
    "Chris Gutierrez","Christopher Boisjoli","Derek Clark","Francis Jeffries","Frank Merchlewitz","Helen Lindberg","Jayden Watts","Jim Nguyen","Josephine Collins","Justin Rovnak","Kyle Kleven","Lita Beach","Markki Meyer","Melissa Hoang","MITCHELL LINDQUIST","Natalie Sasseville-praska","Noah Schlag","Omaur Bliss","Sammy Russ","Samuel Meier","Todd Malone"];
    current = 0;
    console.log(classroom);
    $('#student').hide();
  }
  $('#random').click(function() {
    current = 0;
    shuffle(classroom);
    console.log(classroom);
    $('#student').show();
    $('#student').text(classroom[current] + ': ' + current + 1);
    $('#random').addClass('animated bounceOutUp');
    setTimeout(function() {
      $('#random').hide();
    }, 1000);
  });

  $('#student').click(function() {
    if (current === classroom.length - 1) {
      $('#student').addClass('animated bounceOutRight');
      current = 0;
      shuffle(classroom);
      console.log(classroom);
      localStorage.setItem('classroom', JSON.stringify(classroom));
      localStorage.setItem('current', JSON.stringify(current));
      setTimeout(function() {
        $('#student').removeClass('animated bounceOutRight');
        $('#student').text(classroom[current] + ': ' + (current + 1));
        $('#student').addClass('animated bounceInLeft');
        setTimeout(function() {
          $('#student').removeClass('animated bounceInLeft');
        }, 2000);
      }, 350);
    } else {
      current++;
      $('#student').text(classroom[current] + ': ' + (current + 1));
      localStorage.setItem('classroom', JSON.stringify(classroom));
      localStorage.setItem('current', JSON.stringify(current));
    }
  });

  var padding = { top: 20, right: 40, bottom: 0, left: 0 },
    w = 500 - padding.left - padding.right,
    h = 500 - padding.top - padding.bottom,
    r = Math.min(w, h) / 2,
    rotation = 0,
    oldrotation = 0,
    picked = 100000,
    oldpick = [],
    color = d3.scale.category20(); //category20c()
  //randomNumbers = getRandomNumbers();

  //http://osric.com/bingo-card-generator/?title=HTML+and+CSS+BINGO!&words=padding%2Cfont-family%2Ccolor%2Cfont-weight%2Cfont-size%2Cbackground-color%2Cnesting%2Cbottom%2Csans-serif%2Cperiod%2Cpound+sign%2C%EF%B9%A4body%EF%B9%A5%2C%EF%B9%A4ul%EF%B9%A5%2C%EF%B9%A4h1%EF%B9%A5%2Cmargin%2C%3C++%3E%2C{+}%2C%EF%B9%A4p%EF%B9%A5%2C%EF%B9%A4!DOCTYPE+html%EF%B9%A5%2C%EF%B9%A4head%EF%B9%A5%2Ccolon%2C%EF%B9%A4style%EF%B9%A5%2C.html%2CHTML%2CCSS%2CJavaScript%2Cborder&freespace=true&freespaceValue=Web+Design+Master&freespaceRandom=false&width=5&height=5&number=35#results

  var data = [
    {
      label: "Abdirahman Adam",
      value: '',
      question: "Abdirahman Adam"
    }, // padding
    { label: "Amin Bashir", value: '', question: "Amin Bashir" }, //font-family
    {
      label: "Amy Pastorius",
      value: '',
      question: "Amy Pastorius"
    }, //color
    {
      label: "Anna Fotis",
      value: '',
      question: "Anna Fotis"
    }, //font-weight
    {
      label: "Asli Farah",
      value: '',
      question: "Asli Farah"
    }, //font-size
    {
      label: 'Ayubu Abdirahman',
      value: '',
      question: 'Ayubu Abdirahman'
    }, //nesting
    {
      label: 'Bao Xiong',
      value: '',
      question: 'Bao Xiong'
    }, //bottom
    {
      label: 'Betiel Mengesha',
      value: '',
      question: 'Betiel Mengesha'
    }, //sans-serif
    {
      label: 'Brandon Norrgard',
      value: '',
      question: 'Brandon Norrgard'
    }, //period
    {
      label: 'Bryan Thaoxaochay',
      value: '',
      question: 'Bryan Thaoxaochay'
    }, //<body>
    {
      label: "Caitlin Collins",
      value: '',
      question: "Caitlin Collins"
    },
    {
      label: 'Calvin Jacobsen',
      value: '',
      question: 'Calvin Jacobsen'
    }, //margin
    { label: 'Carolyn Hilpisch', value: '', question: 'Carolyn Hilpisch' }, //< >
    { label: 'Carter Venne', value: '', question: 'Carter Venne' }, //<!DOCTYPE html>
    {
      label: 'Chao SengSai Ly',
      value: '',
      question: 'Chao SengSai Ly'
    }, //<head>
    {
      label: 'Chris Gutierrez',
      value: '',
      question: 'Chris Gutierrez'
    }, // colon <style>
    {
      label: 'Christopher Boisjoli',
      value: '',
      question: 'Christopher Boisjoli'
    }, // .html
    {
      label: 'Derek Clark',
      value: '',
      question: 'Derek Clark'
    }, // HTML
    {
      label: 'Francis Jeffries',
      value: '',
      question: 'Francis Jeffries'
    }, // CSS
    {
      label: 'Frank Merchlewitz',
      value: '',
      question: 'Frank Merchlewitz'
    }, // JavaScript
    {
      label: 'Helen Lindberg',
      value: '',
      question: 'Helen Lindberg'
    }, // border
    {
      label: 'Jayden Watts',
      value: '',
      question: 'Jayden Watts'
    }, //semi-colon//100%
    {
      label: 'Jim Nguyen',
      value: '',
      question: 'Jim Nguyen'
    }, //100%
    {
      label: 'Josephine Collins',
      value: '',
      question: 'Josephine Collins'
    }, //100%
    {
      label: 'Justin Rovnak',
      value: '',
      question: 'Justin Rovnak'
    }, //100%
    {
      label: 'Kyle Kleven',
      value: '',
      question: 'Kyle Kleven'
    }, //100%
    {
      label: 'Lita Beach',
      value: '',
      question: 'Lita Beach'
    }, //100%
    {
      label: 'Markki Meyer',
      value: '',
      question: 'Markki Meyer'
    }, //100%
    {
      label: 'Melissa Hoang',
      value: '',
      question: 'Melissa Hoang'
    }, //100%
    {
      label: 'Mitchell Lindquist',
      value: '',
      question: 'Mitchell Lindquist'
    }, //100%
    {
      label: 'Natalie Sasseville-praska',
      value: '',
      question: 'Natalie Sasseville-praska'
    }, //100%
    {
      label: 'Noah Schlag',
      value: '',
      question: 'Noah Schlag'
    }, //100%
    {
      label: 'Omaur Bliss',
      value: '',
      question: 'Omaur Bliss'
    }, //100%
    {
      label: 'Sammy Russ',
      value: '',
      question: 'Sammy Russ'
    }, //100%
    {
      label: 'Samuel Meier',
      value: '',
      question: 'Samuel Meier'
    }, //100%
    {
      label: 'Todd Malone',
      value: '',
      question: 'Todd Malone'
    }
  ];

  var svg = d3
    .select('#chart')
    .append('svg')
    .data([data])
    .attr('width', w + padding.left + padding.right)
    .attr('height', h + padding.top + padding.bottom);

  var container = svg
    .append('g')
    .attr('class', 'chartholder')
    .attr('transform', 'translate(' + (w / 2 + padding.left) + ',' + (h / 2 + padding.top) + ')');

  var vis = container.append('g');

  var pie = d3.layout
    .pie()
    .sort(null)
    .value(function(d) {
      return 1;
    });

  // declare an arc generator function
  var arc = d3.svg.arc().outerRadius(r);

  // select paths, use arc generator to draw
  var arcs = vis
    .selectAll('g.slice')
    .data(pie)
    .enter()
    .append('g')
    .attr('class', 'slice');

  arcs
    .append('path')
    .attr('fill', function(d, i) {
      return color(i);
    })
    .attr('d', function(d) {
      return arc(d);
    });

  // add the text
  arcs
    .append('text')
    .attr('transform', function(d) {
      d.innerRadius = 0;
      d.outerRadius = r;
      d.angle = (d.startAngle + d.endAngle) / 2;
      return (
        'rotate(' + ((d.angle * 180) / Math.PI - 90) + ')translate(' + (d.outerRadius - 10) + ')'
      );
    })
    .attr('text-anchor', 'end')
    .text(function(d, i) {
      return data[i].label;
    });

  container.on('click', spin);

  function spin(d) {
    container.on('click', null);
    var audioElement = document.createElement('audio');
    var audioElement2 = document.createElement('audio');
    audioElement.setAttribute('src', './GameShow.mp3');
    audioElement2.setAttribute('src', './RandomizerTheme.mp3');
    audioElement.play();
    audioElement2.play();

    //all slices have been seen, all done
    console.log('OldPick: ' + oldpick.length, 'Data length: ' + data.length);
    if (oldpick.length == data.length) {
      console.log('done');
      container.on('click', null);
      return;
    }

    var ps = 360 / data.length,
      pieslice = Math.round(1440 / data.length),
      rng = Math.floor(Math.random() * 1440 + 360);

    rotation = Math.round(rng / ps) * ps;

    picked = Math.round(data.length - (rotation % 360) / ps);
    picked = picked >= data.length ? picked % data.length : picked;

    if (oldpick.indexOf(picked) !== -1) {
      d3.select(this).call(spin);
      return;
    } else {
      oldpick.push(picked);
    }

    rotation += 90 - Math.round(ps / 2);

    vis
      .transition()
      .duration(6000)
      .attrTween('transform', rotTween)
      .each('end', function() {
        //mark question as seen
        d3.select('.slice:nth-child(' + (picked + 1) + ') path').attr('fill', '#111');

        //populate question
        d3.select('#question h1').text(data[picked].question);

        oldrotation = rotation;

        container.on('click', spin);
      });
  }

  //make arrow
  svg
    .append('g')
    .attr(
      'transform',
      'translate(' + (w + padding.left + padding.right) + ',' + (h / 2 + padding.top) + ')'
    )
    .append('path')
    .attr('d', 'M-' + r * 0.15 + ',0L0,' + r * 0.05 + 'L0,-' + r * 0.05 + 'Z')
    .style({ fill: 'white' });

  //draw spin circle
  container
    .append('circle')
    .attr('cx', 0)
    .attr('cy', 0)
    .attr('r', 60)
    .style({ fill: 'white', cursor: 'pointer' });

  //spin text
  container
    .append('text')
    .attr('x', 0)
    .attr('y', 15)
    .attr('text-anchor', 'middle')
    .text('SPIN')
    .style({ 'font-weight': 'bold', 'font-size': '30px' });

  function rotTween(to) {
    var i = d3.interpolate(oldrotation % 360, rotation);
    return function(t) {
      return 'rotate(' + i(t) + ')';
    };
  }

  function getRandomNumbers() {
    var array = new Uint16Array(1000);
    var scale = d3.scale
      .linear()
      .range([360, 1440])
      .domain([0, 100000]);

    if (window.hasOwnProperty('crypto') && typeof window.crypto.getRandomValues === 'function') {
      window.crypto.getRandomValues(array);
      console.log('works');
    } else {
      //no support for crypto, get crappy random numbers
      for (var i = 0; i < 1000; i++) {
        array[i] = Math.floor(Math.random() * 100000) + 1;
      }
    }

    return array;
  }
});
