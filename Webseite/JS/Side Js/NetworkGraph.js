const nodes = new vis.DataSet([
		{"id": 1, "label": "GRUNDLAGEN", "group": "main1", "link":"grundlagen.html", "info":"Mehr erfahren:"},
		{"id": 2, "label": "HARDWARE", "group": "main2", "link":"hardware.html", "info":"Mehr erfahren:"},
		{"id": 3, "label": "METHODEN", "group": "main3", "link":"methoden.html", "info":"Mehr erfahren:"},
		{"id": 4, "label": "SICHERHEIT", "group": "main4", "link":"sicherheit.html", "info":"Mehr erfahren:"},
		{"id": 5, "label": "MANAGMENT", "group": "main5", "link":"netzwerk.html", "info":"Mehr erfahren:"},
		{"id": 6, "label": "DEFINITION", "group": "sub1", "title":"Definition: Netzwerk", "link":"grundlagen.html", "info":"Mehr erfahren:"},
		{"id": 7, "label": "TOPOLOGIEN", "group": "sub1", "title":"Netzwerk-Topologien", "link":"grundlagen.html", "info":"Mehr erfahren:"},
		{"id": 8, "label": "PROTOKOLLE", "group": "sub1", "title":"Netzwerk-Protokolle", "link":"grundlagen.html", "info":"Mehr erfahren:"},
		{"id": 9, "label": "MODELLE", "group": "sub1", "title":"Netzwerk-Modelle", "link":"grundlagen.html", "info":"Mehr erfahren:"},
		{"id": 10, "label": "ROUTER", "group": "sub2", "title":"Router", "link":"hardware.html", "info":"Mehr erfahren:"},
		{"id": 11, "label": "SWITCH", "group": "sub2", "title":"Switch", "link":"hardware.html", "info":"Mehr erfahren:"},
		{"id": 12, "label": "HUB", "group": "sub2", "title":"Hub", "link":"hardware.html", "info":"Mehr erfahren:"},
		{"id": 13, "label": "FIREWALLS", "group": "sub2", "title":"Firewalls", "link":"hardware.html", "info":"Mehr erfahren:"},
		{"id": 14, "label": "ETHERNET", "group": "sub3", "title":"Ethernet", "link":"methoden.html", "info":"Mehr erfahren:"},
		{"id": 15, "label": "WLAN", "group": "sub3", "title":"WLAN", "link":"methoden.html", "info":"Mehr erfahren:"},
		{"id": 16, "label": "BLUETOOTH", "group": "sub3", "title":"Bluetooth", "link":"methoden.html", "info":"Mehr erfahren:"},
		{"id": 17, "label": "DSL", "group": "sub4", "title":"DSL", "link":"sicherheit.html", "info":"Mehr erfahren:"},
		{"id": 18, "label": "VPN", "group": "sub4", "title":"VPN", "link":"sicherheit.html", "info":"Mehr erfahren:"},
		{"id": 19, "label": "FIREWALL", "group": "sub4", "title":"Firewall", "link":"sicherheit.html", "info":"Mehr erfahren:"},
		{"id": 20, "label": "IDS", "group": "sub4", "title":"IDS", "link":"sicherheit.html", "info":"Mehr erfahren:"},
		{"id": 21, "label": "IPS", "group": "sub4", "title":"IPS", "link":"sicherheit.html", "info":"Mehr erfahren:"},
		{"id": 22, "label": "MONOTORIN", "group": "sub5", "title":"Monotring", "link":"netzwerk.html", "info":"Mehr erfahren:"},
		{"id": 23, "label": "REMOTE-ACESS", "group": "sub5", "title":"Remote-Access", "link":"netzwerk.html", "info":"Mehr erfahren:"},
		{"id": 24, "label": "DESIGN", "group": "sub5", "title":"Netzwerk-Design", "link":"netzwerk.html", "info":"Mehr erfahren:"},
		{"id": 25, "label": "IP-ADRESSIERUNG", "group": "sub5", "title":"IP-Adressierung", "link":"netzwerk.html", "info":"Mehr erfahren:"},
		{"id": 26, "label": "NETZWERKTECHNIK", "group": "Hub", "title":"Bewegung; Num-0: Deaktivieren , Num-1: Aktivieren", "link":"#", "info":"Mehr erfahren:"}
]);

const edges = new vis.DataSet([
    { from: 1, to: 6 },
    { from: 1, to: 7 },
    { from: 1, to: 8 },
    { from: 1, to: 9 },
    { from: 2, to: 10 },
    { from: 2, to: 11 },
    { from: 2, to: 12 },
    { from: 2, to: 13 },
    { from: 3, to: 14 },
    { from: 3, to: 15 },
    { from: 3, to: 16 },
    { from: 4, to: 17 },
    { from: 4, to: 18 },
    { from: 4, to: 19 },
    { from: 4, to: 20 },
    { from: 4, to: 21 },
    { from: 5, to: 22 },
    { from: 5, to: 23 },
    { from: 5, to: 24 },
    { from: 5, to: 25 },
    { from: 26, to: 1 },
    { from: 26, to: 2 },
    { from: 26, to: 3 },
    { from: 26, to: 4 },
    { from: 26, to: 5 }
]);

const container = document.getElementById("network");
const data = {
    nodes: nodes,
    edges: edges
}

const options = {
    nodes: {
        shape: "circle",
        font: {
            size: 27,
            family: 'Montserrat, sans-serif',
            fontWeight: "bold",
            color: "black",
            textTransform: "Uppercase"
        },
        borderWidth: 2,
        borderWidthSelected: 4,
        color: {
            border: "#black",
            highlight: {
                border: "#white",
                background: "#D2E5FF"
            },
            hover: {
                border: "#2B7CE9",
                background: "#D2E5FF"
            }
        }
    },
    groups: {
        main1: {
            color: {
                background: "#ccffff",
                border: "black",
                highlight: {
                    background: "#ff2045",
                    border: "white"
                }
            }

        },
        main2: {
            color: {
                background: "#ffcc99",
                border: "black",
                highlight: {
                    background: "#ff2045",
                    border: "white"
                }
            }

        },
        main3: {
            color: {
                background: "#ffff99",
                border: "black",
                highlight: {
                    background: "#ff2045",
                    border: "white"
                }
            }
        },
        main4: {
            color: {
                background: "#ff99cc",
                border: "black",
                highlight: {
                    background: "#ff2045",
                    border: "white"
                }
            }
        },
        main5: {
            color: {
                background: "#e0bbe4",
                border: "black",
                highlight: {
                    background: "#ff2045",
                    border: "white"
                }
            }
        },
        sub1: {
            font: {
                size: 15,
                family: 'Montserrat, sans-serif',
                weight: 900,
                color: "black",
            },
            color: {
                background: "#ccffff",
                border: "black",
                highlight: {
                    background: "#ff2045",
                    border: "white"
                }
            }
        },

        sub2: {
            font: {
                size: 15,
                family: 'Montserrat, sans-serif',
                weight: 900,
                color: "black",
            },
            color: {
                background: "#ffcc99",
                border: "black",
                highlight: {
                    background: "#ff2045",
                    border: "white"
                }
            }
        },

        sub3: {
            font: {
                size: 15,
                family: 'Montserrat, sans-serif',
                weight: 900,
                color: "black",
            },
            color: {
                background: "#ffff99",
                border: "black",
                highlight: {
                    background: "#ff2045",
                    border: "white"
                }
            }
        },

        sub4: {
            font: {
                size: 15,
                family: 'Montserrat, sans-serif',
                weight: 900,
                color: "black",
            },
            color: {
                background: "#ff99cc",
                border: "black",
                highlight: {
                    background: "#ff2045",
                    border: "white"
                }
            }
        },

        sub5: {
            font: {
                size: 15,
                family: 'Montserrat, sans-serif',
                weight: 900,
                color: "black",
            },
            color: {
                background: "#e0bbe4",
                border: "black",
                highlight: {
                    background: "#ff2045",
                    border: "white",
                }
            }
        },

        Hub: {
            font: {
                size: 30,
                family: 'Montserrat, sans-serif',
                weight: 900,
                color: "black"
            },
            color: {
                background: "#20ffae",
                border: "black",
                highlight: {
                    background: "#ff2045",
                    border: "white"
                }
            }
        }

    },

    edges: {
        width: 2,
        color: {
            highlight: "#848484",
            hover: "#848484"
        },
        arrows: {
            to: true
            
        },
        smooth: {
            type: "continuous",
            roundness: 0.5
        }
    },
    physics: {
        enabled: true,
        barnesHut: {
            gravitationalConstant: -50000,
            centralGravity: 0.4,
            springLength: 100,
            springConstant: 0.04,
            damping: 2,
            avoidOverlap: 1
        },
        maxVelocity: 30,
        minVelocity: 0
    }
};



const network = new vis.Network(container, data, options);

//Die Größe des Canvas an die Größe des Fensters anpassen
window.addEventListener("resize", function () {
    network.setSize(window.innerWidth, window.innerHeight);
});

//Ein Klick auf einen Knoten soll diesen in den Fokus schieben und dort soll sie bleibe ein weiterer Klick soll den Knoten wieder zurück schieben
network.on("click", function (params) {
    params.event = "[original event]";
    if (params.nodes.length == 1) {
        network.focus(params.nodes[0], {
            scale: 1.5,
            animation: {
                duration: 1000,
                easingFunction: "easeInOutQuad"
            }
        });
    } else {
        network.fit({
            animation: {
                duration: 1000,
                easingFunction: "easeInOutQuad"
            }
        });
    }
});



// Erstellen Sie eine neue Sidebar, welche die Hintergrundfarbe des ausgewählten Knotens hat
const sidebar = document.createElement('div');
sidebar.setAttribute('id', 'sidebar');
sidebar.classList.add('sidebar');
document.body.appendChild(sidebar);



// Erstellen Sie eine neue Infocard innerhalb der Sidebar
const infocard = document.createElement('div');
infocard.setAttribute('id', 'infocard');
sidebar.appendChild(infocard);

// Auf das click Ereignis der Netzwerkinstanz hören
network.on('click', function(event) {
  const node = event.nodes[0]; // die ausgewählte Node ID
  if (node) {
    const selectedNode = nodes.get(node); // die ausgewählte Node
    // Informationen über die ausgewählte Node in der Infocard anzeigen
    infocard.innerHTML = `
      <h2>${selectedNode.label}</h2>
      <a href="${selectedNode.link}">Mehr erfahren</a>
    `;
    sidebar.style.display = 'block';
    var bgcolor = selectedNode.background;
    sidebar.style.backgroundColor = bgcolor;
  } else {
    // Wenn keine Node ausgewählt ist, die Infocard ausblenden
    sidebar.style.display = 'none';
  }
});

//deactivate Physics, wehn you press "Numpad 0"
document.addEventListener('keydown', function(event) {
    if (event.keyCode == 96) {
        network.setOptions({ physics: false });
    }
});


//activate Physics, wehn you press "Numpad"
document.addEventListener('keydown', function(event) {
    if (event.keyCode == 97) {
        network.setOptions({ physics: true });
    }
});

