package nl.timenolthof.stocks;

import java.math.BigDecimal;
import java.sql.Timestamp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.ApplicationArguments;
import org.springframework.stereotype.Component;

@Component
public class StockDataLoader implements ApplicationRunner {

    private StockRepository stockRepository;

    @Autowired
    public StockDataLoader(StockRepository stockRepository) {
        this.stockRepository = stockRepository;
    }

    public void run(ApplicationArguments args) {
        stockRepository.save(new Stock("Tesla", new BigDecimal(42.42)));
    }
}
