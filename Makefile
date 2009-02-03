MAKE = php /Users/jm/Sites/jmd_plugins/make_txp/make.php
SRC = save.php
CACHE = ../../cache/jmd_save.php
TXT = ../../releases/jmd_save.txt

all:
	$(MAKE) $(SRC) $(CACHE) $(TXT)

clean:
	rm $(CACHE) $(TXT)

