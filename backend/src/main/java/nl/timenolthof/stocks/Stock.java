package nl.timenolthof.stocks;

import java.math.BigDecimal;
import java.sql.Timestamp;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;

@Data
@Entity
public class Stock {

    private @Id @GeneratedValue Long id;
    private String name;
    private BigDecimal currentPrice;
    private Timestamp lastUpdate;

    private Stock() {}

    public Stock(String name, BigDecimal currentPrice) {
        this.name = name;
        this.currentPrice = currentPrice;
    }

    @PrePersist
    protected void onCreate() {
      lastUpdate = new Timestamp(System.currentTimeMillis());
    }

    @PreUpdate
    protected void onUpdate() {
      lastUpdate = new Timestamp(System.currentTimeMillis());
    }

}
