# Tic Tac Toe Global
# The board_layout
board_layout = ["1", "2", "3",
                "4", "5", "6",
                "7", "8", "9"]
# The play board
board = ["-", "-", "-",
         "-", "-", "-",
         "-", "-", "-"]


def display_board():
    print(board[0] + " | " + board[1] + " | " + board[2])
    print(board[3] + " | " + board[4] + " | " + board[5])
    print(board[6] + " | " + board[7] + " | " + board[8])


def display_board_layout():
    print(board_layout[0] + " | " + board_layout[1] + " | " + board_layout[2])
    print(board_layout[3] + " | " + board_layout[4] + " | " + board_layout[5])
    print(board_layout[6] + " | " + board_layout[7] + " | " + board_layout[8])


def get_players():
    global players
    print("The numbers in the board layout below will be used to play the game")
    display_board_layout()
    print("X => Player 1 & O => Player 2")
    player1 = input("Enter name of Player 1: ")
    player2 = input("Enter name of Player 2: ")
    players = {"X": player1,
               "O": player2}
    return players

