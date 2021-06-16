from setup import *

is_gameGoing = True

winner = None

current_player = "X"
# End Global


def play_game(players):
    while is_gameGoing == True:
        # allow player to make move
        handle_turn(current_player)
        # check to see if game should end
        check_if_gameOver()
        # if false in prev func...switch to next player
        flip_Player()
    if winner == "X" or winner == "O":
        print(players.get(winner) + " Won!")
    elif winner == None:
        print("it's a tie!")


def handle_turn(current_player):
    print(current_player + "'s turn")
    position = input("Choose a number from 1-9: ")
    while position not in ["1", "2", "3", "4", "5", "6", "7", "8", "9"]:
        position = input("Invalid Input. Enter Again: ")
    position = int(position) - 1
    if board[position] != "-":
        print("Spot filled...enter again.")
        handle_turn(current_player)
    else:
        board[position] = current_player
        display_board()


def flip_Player():
    global current_player
    if current_player == "X":
        current_player = "O"
    elif current_player == "O":
        current_player = "X"
    return


def check_if_gameOver():
    check_for_winner()
    check_for_tie()
    return winner


def check_for_tie():
    global is_gameGoing
    if "-" not in board:
        is_gameGoing = False
    return


def check_for_winner():
    global winner
    # check rows win
    win_row = check_row_winner()
    # check columns win
    win_col = check_column_winner()
    # check diagonals win
    win_dia = check_diagonal_winner()
    # get winner
    if win_col:
        winner = win_col
    elif win_row:
        winner = win_row
    elif win_dia:
        winner = win_dia
    else:
        winner = None
    return


def check_diagonal_winner():
    global is_gameGoing
    dia_1 = board[0] == board[4] == board[8] != "-"
    dia_2 = board[6] == board[4] == board[2] != "-"
    if dia_1 or dia_2:
        is_gameGoing = False
    if dia_1:
        return board[0]
    elif dia_2:
        return board[6]
    return


def check_row_winner():
    global is_gameGoing
    row_1 = board[0] == board[1] == board[2] != "-"
    row_2 = board[3] == board[4] == board[5] != "-"
    row_3 = board[6] == board[7] == board[8] != "-"
    if row_1 or row_2 or row_3:
        is_gameGoing = False
    if row_1:
        return board[0]
    elif row_2:
        return board[3]
    elif row_3:
        return board[6]
    return


def check_column_winner():
    global is_gameGoing
    col_1 = board[0] == board[3] == board[6] != "-"
    col_2 = board[1] == board[4] == board[7] != "-"
    col_3 = board[2] == board[5] == board[8] != "-"
    if col_1 or col_2 or col_3:
        is_gameGoing = False
    if col_1:
        return board[0]
    elif col_2:
        return board[1]
    elif col_3:
        return board[2]
    return
