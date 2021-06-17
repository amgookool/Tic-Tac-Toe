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
def turn_handler(player):
    print(player+"'s turn.")
    position = input("Choose a poosition from 1-9: ")
    while int(position) not in [1,2,3,4,5,6,7,8,9]:
        position = input("Invalid Number...")

# Fucntion which defines the gameplay of tic-tac-toe
def play_game():
    while is_GameGoing:
        display_board(board)
        break

def run_main():
    print("\nWelcome to the game of Tic-Tac-Toe\n")
    players = get_players()
    instructions()
    play_game()
    is_playAgain = 'y'
    while is_playAgain == 'y':
        is_playAgain = input("Play another game? (y/n): ")
        if is_playAgain == 'n':
            break
        else:
            play_game()
    print('game is now ending')
    exit()



run_main()