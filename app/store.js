import Canvas from 'awv3/core/canvas';
import View from 'awv3/core/view';
import editorContent from 'raw!./template.txt';

const dom = document.createElement("div");
dom.style.width = "100%";
dom.style.height = "100%";
dom.style.overflow = "hidden";

export let state = {
    storageKey: 'awv3-analyzer-editor-content-1',
    url: document.location.hostname == 'localhost' ? 'http://localhost:8181' : 'http://awvr2.cloudapp.net:8080',
    filter: '',
    internal: {
        type: 'system',
        alive: true,
        errors: [],
        privateport: 0,
        publicport: 0,
        tasks: [],
        users: [],
        analyzers: [],
        sessions: []
    },
    canvas: new Canvas({ dom }),
    view: new View(),
    messages: [],
    log: [],
    editorContent
};