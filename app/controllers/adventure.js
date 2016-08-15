import Ember from 'ember';

var store = {
    a: {
        'id': 'a',
        'title': 'Wonderful Everyday',
        'url': 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/160999195&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true',
    },
    b: {
        'id': 'b',
        'title': 'Angels',
        'url': 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/230266213&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true',
    },
    c: {
        'id': 'c',
        'title': 'Home Studio',
        'url': 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/141310162&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true',
    },
    d: {
        'id': 'd',
        'title': 'Sunday Candy',
        'url': 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/178525956&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true',
    },
    e: {
        'id': 'e',
        'title': 'No Problem',
        'url': 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/266129708&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true',
    },
    f: {
        'id': 'f',
        'title': 'Familiar',
        'url': 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/212649822&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true',
    }
}

export default Ember.Controller.extend({
    init() {
        this.set('tree', {
            a: {
                c: 'playlist1',
                d: 'playlist2',
            },
            b: {
                e: 'playlist3',
                f: 'playlist4',
            }
        });
        let cur = Object.keys(this.get('tree'));
        this.set('choiceA', store[cur[0]]);
        this.set('choiceB', store[cur[1]]);
    },
    path: [],
    done: false,
    actions: {
        choose(choice){
            let curLevel = this.get('tree');
            let path = this.get('path');
            if (path && path.length > 0) {
                path.forEach(level => {curLevel = curLevel[level]});
            };
            if (typeof curLevel[choice] === 'string') {
                this.set('done', true);
                this.set('url', curLevel[choice]);
                return;
            }
            path.push(choice);
            this.set('path', path);
            let cur = Object.keys(curLevel[choice]);
            this.set('choiceA', store[cur[0]]);
            this.set('choiceB', store[cur[1]]);
        }
    }

});
