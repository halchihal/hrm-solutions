callback({
  "levelNumber": 31,
  "size": 11,
  "steps": 104,
  "successRatio": 1,
  "author": "johanatan",
  "hash": "866da7c3365acb34708b0e4b1f939490",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 31-String-Reverse - SIZE 11/11 - SPEED 118/122 --\n\na:\nb:\n    INBOX\n    JUMPZ    c\n    COPYTO   [14]\n    BUMPUP   14\n    JUMP     a\nc:\nd:\n    BUMPDN   14\n    COPYFROM [14]\n    OUTBOX\n    COPYFROM 14\n    JUMPZ    b\n    JUMP     d\n\n"
});