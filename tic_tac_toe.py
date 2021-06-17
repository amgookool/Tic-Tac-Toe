from gameplay import *
from enum import Enum, auto
class States(Enum):
    START = auto()
    PLAY_GAME = auto()
    STOP = auto()


def tic_tac_toe():
    player1 = players.get("X")
    player2 = players.get("O")
    play_game(players)
    input()

def state_machine():
    game = States
    if game.START:
        get_players()
        game = game.PLAY_GAME
    if game.PLAY_GAME:
        tic_tac_toe()
        response = input("Do you want to play again?(y/n)")
        if response == "y":
            game = game.START
        else:
            game =  game.STOP
    if game.STOP:
        exit()



state_machine()