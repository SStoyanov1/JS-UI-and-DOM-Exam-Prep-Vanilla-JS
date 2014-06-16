function createCalendar(selector, events) {

    var container = document.querySelector(selector);
    container.style.margin = '20px';
    container.style.marginLeft = '40px';

    var calendarEvents = events;

    var box = document.createElement('div');
    box.className = 'boxes';
    box.style.width = '170px';
    box.style.height = '170px';
    box.style.border = '1px solid black';
    box.style.display = 'inline-block';
    box.style.marginBottom = '-1px';
    box.style.marginRight = '0';
    //box.style.position = 'relative';



    var boxTitle = document.createElement('strong');
    boxTitle.className = 'box-titles';
    boxTitle.style.textAlign = 'center';
    boxTitle.style.width = '170px';
    boxTitle.style.height = '20px';
    boxTitle.style.borderBottom = '1px solid black';
    boxTitle.style.display = 'block';
    boxTitle.style.backgroundColor = '#ccc';

    var boxContent = document.createElement('div');
    boxContent.className = 'box-contents';
    boxContent.innerHTML = '&nbsp;';

    box.appendChild(boxTitle);
    box.appendChild(boxContent);

    var dFrag = document.createDocumentFragment();

    for (var i = 0; i < 30; i++) {
        var currentDiv = box.cloneNode(true);
        currentDiv.firstChild.innerHTML = getDayOfWeek(i % 7) + ' ' + (i + 1) + ' June 2014';
        dFrag.appendChild(currentDiv);
    }

    container.appendChild(dFrag);

    for (var i = 0; i < calendarEvents.length; i++) {
        var day = parseInt(calendarEvents[i].date);
        container.children[day - 1].children[1].innerHTML = calendarEvents[i].hour + 'h ' + calendarEvents[i].title;
    }

    var boxes = document.querySelectorAll('.box-titles');
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('mouseover', function () {
            if (!hasClass(this, 'selected')) {
                this.style.backgroundColor = 'green';
            }
        });
        boxes[i].addEventListener('mouseout', function () {
            if (!hasClass(this, 'selected')) {
                this.style.backgroundColor = '#ccc';
            }
        });

        boxes[i].addEventListener('click', function () {
            var boxes = document.querySelectorAll('.box-titles');

            if (hasClass(this, 'selected')) {
                removeClass(this, 'selected');
                this.style.backgroundColor = '#ccc';
            }

            else {
                for (var j = 0; j < 30; j++) {
                    if (hasClass(boxes[j], 'selected')) {
                        removeClass(boxes[j], 'selected');
                        boxes[j].style.backgroundColor = '#ccc';
                    }
                }

                addClass(this, 'selected');
                this.style.backgroundColor = 'red';
            }





        });
    }

    function getDayOfWeek(day) {

        switch (day) {
            case 0:
                return "Sun";
            case 1:
                return "Mon";
            case 2:
                return "Tue";
            case 3:
                return "Wed";
            case 4:
                return "Thu";
            case 5:
                return "Fri";
            case 6:
                return "Sat";
        }

        return dayOfWeek;
    }

    function hasClass(el, name) {
        return new RegExp('(\\s|^)' + name + '(\\s|$)').test(el.className);
    }

    function addClass(el, name) {
        if (!hasClass(el, name)) { el.className += (el.className ? ' ' : '') + name; }
    }

    function removeClass(el, name) {
        if (hasClass(el, name)) {
            el.className = el.className.replace(new RegExp('(\\s|^)' + name + '(\\s|$)'), ' ').replace(/^\s+|\s+$/g, '');
        }
    }
};