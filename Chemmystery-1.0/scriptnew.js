window.onload = function() {
    const nickname = localStorage.getItem('nickname') || 'Player';
    document.getElementById('game-heading').innerText = `${nickname.toUpperCase()} is busy solving the Chem-mysterious case!`;

    // Store the correct positions of the elements in the periodic table
    const periodicTable = {
        // Period 1
        H: { row: 1, col: 1, block: 's' },
        He: { row: 1, col: 18, block: 'p' },
        
        // Period 2
        Li: { row: 2, col: 1, block: 's' },
        Be: { row: 2, col: 2, block: 's' },
        B: { row: 2, col: 13, block: 'p' },
        C: { row: 2, col: 14, block: 'p' },
        N: { row: 2, col: 15, block: 'p' },
        O: { row: 2, col: 16, block: 'p' },
        F: { row: 2, col: 17, block: 'p' },
        Ne: { row: 2, col: 18, block: 'p' },
        
        // Period 3
        Na: { row: 3, col: 1, block: 's' },
        Mg: { row: 3, col: 2, block: 's' },
        Al: { row: 3, col: 13, block: 'p' },
        Si: { row: 3, col: 14, block: 'p' },
        P: { row: 3, col: 15, block: 'p' },
        S: { row: 3, col: 16, block: 'p' },
        Cl: { row: 3, col: 17, block: 'p' },
        Ar: { row: 3, col: 18, block: 'p' },
        
        // Period 4
        K: { row: 4, col: 1, block: 's' },
        Ca: { row: 4, col: 2, block: 's' },
        Sc: { row: 4, col: 3, block: 'd' },
        Ti: { row: 4, col: 4, block: 'd' },
        V: { row: 4, col: 5, block: 'd' },
        Cr: { row: 4, col: 6, block: 'd' },
        Mn: { row: 4, col: 7, block: 'd' },
        Fe: { row: 4, col: 8, block: 'd' },
        Co: { row: 4, col: 9, block: 'd' },
        Ni: { row: 4, col: 10, block: 'd' },
        Cu: { row: 4, col: 11, block: 'd' },
        Zn: { row: 4, col: 12, block: 'd' },
        Ga: { row: 4, col: 13, block: 'p' },
        Ge: { row: 4, col: 14, block: 'p' },
        As: { row: 4, col: 15, block: 'p' },
        Se: { row: 4, col: 16, block: 'p' },
        Br: { row: 4, col: 17, block: 'p' },
        Kr: { row: 4, col: 18, block: 'p' },
        
        // Period 5
        Rb: { row: 5, col: 1, block: 's' },
        Sr: { row: 5, col: 2, block: 's' },
        Y: { row: 5, col: 3, block: 'd' },
        Zr: { row: 5, col: 4, block: 'd' },
        Nb: { row: 5, col: 5, block: 'd' },
        Mo: { row: 5, col: 6, block: 'd' },
        Tc: { row: 5, col: 7, block: 'd' },
        Ru: { row: 5, col: 8, block: 'd' },
        Rh: { row: 5, col: 9, block: 'd' },
        Pd: { row: 5, col: 10, block: 'd' },
        Ag: { row: 5, col: 11, block: 'd' },
        Cd: { row: 5, col: 12, block: 'd' },
        In: { row: 5, col: 13, block: 'p' },
        Sn: { row: 5, col: 14, block: 'p' },
        Sb: { row: 5, col: 15, block: 'p' },
        Te: { row: 5, col: 16, block: 'p' },
        I: { row: 5, col: 17, block: 'p' },
        Xe: { row: 5, col: 18, block: 'p' },
        
        // Period 6
        Cs: { row: 6, col: 1, block: 's' },
        Ba: { row: 6, col: 2, block: 's' },
        La: { row: 9, col: 3, block: 'f' }, // Lanthanide
        La: { row: 9, col: 3, block: 'f' },
        Ce: { row: 9, col: 4, block: 'f' },
        Pr: { row: 9, col: 5, block: 'f' },
        Nd: { row: 9, col: 6, block: 'f' },
        Pm: { row: 9, col: 7, block: 'f' },
        Sm: { row: 9, col: 8, block: 'f' },
        Eu: { row: 9, col: 9, block: 'f' },
        Gd: { row: 9, col: 10, block: 'f' },
        Tb: { row: 9, col: 11, block: 'f' },
        Dy: { row: 9, col: 12, block: 'f' },
        Ho: { row: 9, col: 13, block: 'f' },
        Er: { row: 9, col: 14, block: 'f' },
        Tm: { row: 9, col: 15, block: 'f' },
        Yb: { row: 9, col: 16, block: 'f' },
        Lu: { row: 9, col: 17, block: 'f' },
        Hf: { row: 6, col: 4, block: 'd' },
        Ta: { row: 6, col: 5, block: 'd' },
        W: { row: 6, col: 6, block: 'd' },
        Re: { row: 6, col: 7, block: 'd' },
        Os: { row: 6, col: 8, block: 'd' },
        Ir: { row: 6, col: 9, block: 'd' },
        Pt: { row: 6, col: 10, block: 'd' },
        Au: { row: 6, col: 11, block: 'd' },
        Hg: { row: 6, col: 12, block: 'd' },
        Tl: { row: 6, col: 13, block: 'p' },
        Pb: { row: 6, col: 14, block: 'p' },
        Bi: { row: 6, col: 15, block: 'p' },
        Po: { row: 6, col: 16, block: 'p' },
        At: { row: 6, col: 17, block: 'p' },
        Rn: { row: 6, col: 18, block: 'p' },
        
        // Period 7
        Fr: { row: 7, col: 1, block: 's' },
        Ra: { row: 7, col: 2, block: 's' },
        Ac: { row: 10, col: 3, block: 'f' }, // Actinide
        Th: { row: 10, col: 4, block: 'f' },
        Pa: { row: 10, col: 5, block: 'f' },
        U: { row: 10, col: 6, block: 'f' },
        Np: { row: 10, col: 7, block: 'f' },
        Pu: { row: 10, col: 8, block: 'f' },
        Am: { row: 10, col: 9, block: 'f' },
        Cm: { row: 10, col: 10, block: 'f' },
        Bk: { row: 10, col: 11, block: 'f' },
        Cf: { row: 10, col: 12, block: 'f' },
        Es: { row: 10, col: 13, block: 'f' },
        Fm: { row: 10, col: 14, block: 'f' },
        Md: { row: 10, col: 15, block: 'f' },
        No: { row: 10, col: 16, block: 'f' },
        Lr: { row: 10, col: 17, block: 'f' },
        Rf: { row: 7, col: 4, block: 'd' },
        Db: { row: 7, col: 5, block: 'd' },
        Sg: { row: 7, col: 6, block: 'd' },
        Bh: { row: 7, col: 7, block: 'd' },
        Hs: { row: 7, col: 8, block: 'd' },
        Mt: { row: 7, col: 9, block: 'd' },
        Ds: { row: 7, col: 10, block: 'd' },
        Rg: { row: 7, col: 11, block: 'd' },
        Cn: { row: 7, col: 12, block: 'd' },
        Nh: { row: 7, col: 13, block: 'p' },
        Fl: { row: 7, col: 14, block: 'p' },
        Mc: { row: 7, col: 15, block: 'p' },
        Lv: { row: 7, col: 16, block: 'p' },
        Ts: { row: 7, col: 17, block: 'p' },
        Og: { row: 7, col: 18, block: 'p' }
    };

    let accuracy = 0;
    let moves = 0;
    let dragged = null;
    let totalElements = Object.keys(periodicTable).length;
    let stopwatchStarted = false;
    let stopwatchTime = 0;
    let stopwatchInterval;

    // Function to randomize element positions
    function randomizeElementPositions() {
        const elementSymbols = Object.keys(periodicTable);
      const shuffledPositions = shuffleArray([...elementSymbols]);
      const randomizedTable = {};
        
      elementSymbols.forEach((symbol, index) => {
          randomizedTable[symbol] = {
              row: periodicTable[shuffledPositions[index]].row,
              col: periodicTable[shuffledPositions[index]].col,
              block: periodicTable[symbol.block] // Keep the original block
};
      });

      return randomizedTable;
    }

    // Create periodic table grid with proper layout
    function createPeriodicTable() {
        const table = document.getElementById('periodic-table');
        table.innerHTML = '';

        // Create grid structure - 7 main rows + 2 for lanthanides/actinides + spacing
        // Find the max rows and columns needed
        let maxRow = 0;
        let maxCol = 0;
        for (const element in periodicTable) {
            maxRow = Math.max(maxRow, periodicTable[element].row);
            maxCol = Math.max(maxCol, periodicTable[element].col);
        }

        // Create a 2D array to represent the grid
        const grid = Array(maxRow + 1).fill().map(() => Array(maxCol + 1).fill(null));

        // Create array of element symbols and shuffle them
        const elementSymbols = Object.keys(periodicTable);
        const shuffledElements = shuffleArray([...elementSymbols]);

        // Create grid with empty positions
        for (let row = 1; row <= maxRow; row++) {
            for (let col = 1; col <= maxCol; col++) {
                const cell = document.createElement('div');
                cell.style.gridRow = row;
                cell.style.gridColumn = col;

                // Check if this position should have an element
                let hasElement = false;
                let elementAtPosition = null;
                for (const element in periodicTable) {
                    if (periodicTable[element].row === row && periodicTable[element].col === col) {
                        hasElement = true;
                        elementAtPosition = element;
                        break;
                    }
                }

                if (hasElement) {
                    // Get the next shuffled element
                    const symbol = shuffledElements.pop();

                    // Calculate unique position ID
                    const positionId = (periodicTable[symbol].row - 1) * maxCol + periodicTable[symbol].col;

                    cell.className = `element-box ${periodicTable[symbol].block}`;
                    cell.id = `box-${positionId}`;
                    cell.dataset.symbol = symbol;
                    cell.dataset.correctRow = periodicTable[symbol].row;
                    cell.dataset.correctCol = periodicTable[symbol].col;
                    cell.dataset.positionId = positionId;
                    cell.textContent = symbol;

                    // Add drag events
                    cell.draggable = true;
                    cell.addEventListener('dragstart', dragStart);
                    cell.addEventListener('dragend', dragEnd);
                    cell.addEventListener('dragover', dragOver);
                    cell.addEventListener('dragenter', dragEnter);
                    cell.addEventListener('dragleave', dragLeave);
                    cell.addEventListener('drop', drop);

                    table.appendChild(cell);
                } else if ((row === 8 && col <= maxCol) || (row === 6 && col === 3) || (row === 7 && col === 3)) {
                    // Add spacer for lanthanide/actinide indicator
                    cell.className = 'spacer';
                    table.appendChild(cell);
                }
            }
        }
    }

    // Fisher-Yates shuffle algorithm
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Start the stopwatch
    function startStopwatch() {
        if (!stopwatchStarted) {
            stopwatchStarted = true;
            const startTime = Date.now() - stopwatchTime;
            stopwatchInterval = setInterval(() => {
                stopwatchTime = Date.now() - startTime;
                updateStopwatchDisplay();
            }, 1000);
        }
    }

    // Update stopwatch display
    function updateStopwatchDisplay() {
        const hours = Math.floor(stopwatchTime / 3600000);
        const minutes = Math.floor((stopwatchTime % 3600000) / 60000);
        const seconds = Math.floor((stopwatchTime % 60000) / 1000);

        document.getElementById('stopwatch').textContent =
            `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    // Stop the stopwatch
    function stopStopwatch() {
        if (stopwatchStarted) {
            clearInterval(stopwatchInterval);
        }
    }

    // Format time for display
    function formatTime(milliseconds) {
        const hours = Math.floor(milliseconds / 3600000);
        const minutes = Math.floor((milliseconds % 3600000) / 60000);
        const seconds = Math.floor((milliseconds % 60000) / 1000);

        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    // Drag functions
    function dragStart(e) {
        dragged = this;
        this.classList.add('dragging');
        e.dataTransfer.setData('text/plain', this.id);

        // Start stopwatch on first move
        if (!stopwatchStarted) {
            startStopwatch();
        }
    }

    function dragEnd() {
        this.classList.remove('dragging');
    }

    function dragOver(e) {
        e.preventDefault();
    }

    function dragEnter(e) {
        e.preventDefault();
        this.classList.add('drag-over');
    }

    function dragLeave() {
        this.classList.remove('drag-over');
    }

    function drop(e) {
        e.preventDefault();
        this.classList.remove('drag-over');

        if (dragged && this !== dragged) {
            // Update moves counter
            moves++;
            document.getElementById('moves').textContent = moves;

            // Swap elements
            const fromSymbol = dragged.dataset.symbol;
            const toSymbol = this.dataset.symbol;

            // Swap content and data attributes
            dragged.dataset.symbol = toSymbol;
            this.dataset.symbol = fromSymbol;

            dragged.textContent = toSymbol;
            this.textContent = fromSymbol;

            const fromBlock = periodicTable[fromSymbol].block;
            const toBlock = periodicTable[toSymbol].block;

            // Update block classes for color
            dragged.className = `element-box ${toBlock}`;
            this.className = `element-box ${fromBlock}`;

            // Check if placed correctly
            checkPlacement(this);
            checkPlacement(dragged);
        }
    }

    // Check if an element is in its correct position
    function checkPlacement(element) {
        const symbol = element.dataset.symbol;
        const currentRow = parseInt(element.style.gridRow);
        const currentCol = parseInt(element.style.gridColumn);
        const correctRow = periodicTable[symbol].row;
        const correctCol = periodicTable[symbol].col;

        // Remove any previous correct/incorrect classes
        element.classList.remove('correct', 'incorrect');

        if (currentRow === correctRow && currentCol === correctCol) {
            element.classList.add('correct');
        } else {
            element.classList.add('incorrect');
        }

        // Update accuracy count
        updateAccuracy();

        // Check if all elements are in correct position
        checkCompletion();
    }

    // Update accuracy display
    function updateAccuracy() {
        const allBoxes = document.querySelectorAll('.element-box');
        accuracy = 0;

        allBoxes.forEach(box => {
            const symbol = box.dataset.symbol;
            const currentRow = parseInt(box.style.gridRow);
            const currentCol = parseInt(box.style.gridColumn);
            const correctRow = periodicTable[symbol].row;
            const correctCol = periodicTable[symbol].col;

            if (currentRow === correctRow && currentCol === correctCol) {
                accuracy++;
            }
        });

        document.getElementById('accuracy').textContent = `${accuracy} out of ${totalElements}`;
    }

    // Check if the game is complete (all elements in correct position)
    function checkCompletion() {
        if (accuracy === totalElements) {
            stopStopwatch();
            showCompletionPopup();
        }
    }

    function startEmojiRain() {
        const emojiRainContainer = document.getElementById('emoji-rain');
        emojiRainContainer.innerHTML = ''; // Clear any existing emojis

        const numberOfEmojis = 50; // Adjust as needed

        for (let i = 0; i < numberOfEmojis; i++) {
            const emoji = document.createElement('div');
            emoji.classList.add('emoji');
            emoji.textContent = '🎉'; // Set the emoji

            // Random positioning
            emoji.style.left = `${Math.random() * 100}vw`;
                emoji.style.fontSize = `${1 + Math.random()}em`; // Random Size

                // Random rotation
                emoji.style.animationDelay = `${Math.random() * 3}s`;

            emojiRainContainer.appendChild(emoji);
        }
        }

    // Show completion popup
    function showCompletionPopup() {
        startEmojiRain();
        const score = Math.round((totalElements / moves) * 100);

        const popup = document.createElement('div');
        popup.className = 'popup';
        popup.innerHTML = `
            <h2>Congratulations! 🎉</h2>
            <p>You've completed the periodic table!</p>
            <p>Total Moves: ${moves}</p>
            <p>Time: ${formatTime(stopwatchTime)}</p>
            <p>Score: ${score}%</p>
        `;

        const continueButton = document.createElement('button');
        continueButton.innerText = 'Replay';
        continueButton.addEventListener('click', () => {
            document.body.removeChild(popup);
            window.location.href = 'index.html';
        });

        popup.appendChild(continueButton);
        document.body.appendChild(popup);
    }

    // Initialize all elements
    function initGame() {
        // Randomize element positions before creating the table
        createPeriodicTable();
        document.getElementById('accuracy').textContent = `0 out of ${totalElements}`;
        document.getElementById('moves').textContent = '0';

        // Initialize stopwatch display
        updateStopwatchDisplay();

        // Add initial check for element positions
        const allBoxes = document.querySelectorAll('.element-box');
        allBoxes.forEach(box => {
            checkPlacement(box);
        });
    }

    // Start the game
    initGame();
};
