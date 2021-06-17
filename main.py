# Board used for gameplay
board = ['-', '-', '-',
         '-', '-', '-',
         '-', '-', '-']

# Let us know if a win condition or tie condition is met... to know if to continue the game or not
is_GameGoing = True

# Let us know who the winner of the game is 
winner = None

# Let us know who the current player is (player that is making the move)
current_player = 'X'

# Function used to display a tic-tac-toe board
def display_board(_board = type(list)):
    print(_board[0] + ' | ' + _board[1] + ' | ' + _board[2])
    print(_board[3] + ' | ' + _board[4] + ' | ' + _board[5])
    print(_board[6] + ' | ' + _board[7] + ' | ' + _board[8])


# Function used to define the instructions for the game
def instructions():
    info_board = ['1', '2', '3',
                  '4', '5', '6',
                  '7', '8', '9']
    print("\nNumbers 1-9 are used to input the marking for the respective player's position")
    display_board(_board=info_board)
    print("Player 1 => X and Player 2 => O\n")

# Function that get player1 and player2 for tic-tac-toe game
def get_players():
    player1 = input("Please enter the name of Player 1: ")
    player2 = input("\nPlease enter the name of Player 2: ")
    return {'X' : player1, 'O' : player2}



# Function that defines the move a player makes on his/her turn
# The input parameter of this function represents the 'X' or 'O' player 
def turn_handler(player):
    print(player+"'s turn.")
    position = input("Choose a poosition from 1-9: ")
    # Condition if user input does not match the specified integer range
    # keep prompting the user until valid number is detected
    while int(position) not in [1,2,3,4,5,6,7,8,9]:
        position = input("Invalid Number...Enter agin: ")
    position = int(position) - 1 # get the appropiate integer value for python list position
    if board[position]!= '-':
        print("Spot is filled...Enter again.")
        turn_handler(player) # call back function to get valid user input 
    else:
        board[position] = player
        display_board(board)
        print('\n')


# Function that switches the player after a successful turn 
# using the current_player global variable...
# if the current_player is 'X' then switch the current player to 'O'
# if the current_player is 'O' then switch the current_playerto 'X' 
def flip_player():
    global current_player
    if current_player == 'X':
        current_player = 'O'
    elif current_player == 'O':
        current_player = 'X'


# function that check the board to see if a user wins
def check_winner():
    global winner
    row_win = check_row() # return key if win condition is found else returns None
    col_win = check_column() # return key if win condition is found else returns None
    diag_win = check_diagonals() #return key if win condition is found else returns None
    # if key is present... assign winner to key of win condition
    if row_win:
        winner = row_win
    elif col_win:
        winner = col_win
    elif diag_win:
        winner = diag_win
    else:
        winner = None


def check_row():
    global is_GameGoing
    # check if entries in row 1,2,3 matches resepectively and does not contain an empty space('-')
    # ** win conditions for rows
    row1 = board[0] == board[1] == board[2] != '-' # return True/False
    row2 = board[3] == board[4] == board[5] != '-' # return True/False
    row3 = board[6] == board[7] == board[8] != '-' # return True/False

    # if any of the win conitions is true...end the game
    if row1 or row2 or row3 :
        is_GameGoing = False
    # check every row and return the key of the winner (X or O)
    if row1:
        return board[0]
    if row2:
        return board[3]
    if row3:
        return board[6]
    
def check_column():
    global is_GameGoing
    # check if entries in coloumns 1,2,3 matches respectively and does not contain any empty space
    # ** win conitions for columns
    col1 = board[0] == board[3] == board[6] != '-' # return True/False
    col2 = board[1] == board[4] == board[7] != '-' # return True/False
    col3 = board[2] == board[5]  == board[8] != '-' # return True/False
    # if any of the column win conditions is true... end the game 
    if col1 or col2 or col3 : 
        is_GameGoing = False
    if col1: 
        return board[0]
    if col2:
        return board[1]
    if col3:
        return board[2]

def check_diagonals():
    global is_GameGoing
    # check if entries in diagnals 1 and 2 matches and does not contain any empty spaces ('-')
    diag1 = board[0] == board[4] == board[8] != '-' # True/ False
    diag2 = board[2] == board[4] == board[6] != '-' # True/False
    # check if any diagonal win conditions is true... if it is, then end the game 
    if diag1 or diag2:
        is_GameGoing = False
    # if win condition is met in diagonal 1... return the winner key
    if diag1:
        return board[0]
    if diag2:
        return board[2]

# This function checks the board to determine if the game was a tie
# Pre-req - functions that check for a winner must be called before this function
def check_tie():
    global is_GameGoing
    # if there are no empty spaces in the board... then end the game cus its a tie 
    if '-' not in board:
        is_GameGoing = False

# Functions that does all checks to determine if game should continue 
def check_GameOver():
    pass


# Fucntion which defines the gameplay of tic-tac-toe
def play_game(players):
    display_board(board)
    global current_player
    while is_GameGoing:
        turn_handler(current_player)
        check_winner()
        flip_player()


# Function that defines the execution of the overall Tic-Tac-Toe Application 
def run_main():
    print("\nWelcome to the game of Tic-Tac-Toe\n")
    players = get_players()
    instructions()
    play_game(players)
    is_playAgain = 'y'
    while is_playAgain == 'y':
        is_playAgain = input("Play another game? (y/n): ")
        if is_playAgain == 'n':
            break
        else:
            play_game(players)
    print('game is now ending')
    exit()



run_main()